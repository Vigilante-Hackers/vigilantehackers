import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GlitchText } from "@/components/GlitchText";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { 
  User, Mail, Shield, BookOpen, Heart, Terminal, 
  Save, Loader2, CheckCircle, TrendingUp
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Profile {
  username: string | null;
  bio: string | null;
  avatar_url: string | null;
}

interface LearningProgress {
  id: string;
  topic: string;
  category: string;
  status: string;
  progress_percentage: number;
}

interface FavoriteResource {
  id: string;
  resource_title: string;
  resource_type: string;
  category: string | null;
}

const Profile = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [profile, setProfile] = useState<Profile>({ username: "", bio: "", avatar_url: "" });
  const [learningProgress, setLearningProgress] = useState<LearningProgress[]>([]);
  const [favorites, setFavorites] = useState<FavoriteResource[]>([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      // Fetch profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();
      
      if (profileData) {
        setProfile({
          username: profileData.username,
          bio: profileData.bio,
          avatar_url: profileData.avatar_url,
        });
      }

      // Fetch learning progress
      const { data: progressData } = await supabase
        .from("learning_progress")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      
      if (progressData) {
        setLearningProgress(progressData);
      }

      // Fetch favorites
      const { data: favoritesData } = await supabase
        .from("favorite_resources")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      
      if (favoritesData) {
        setFavorites(favoritesData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async () => {
    if (!user) return;
    
    setIsUpdating(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          username: profile.username,
          bio: profile.bio,
          avatar_url: profile.avatar_url,
        })
        .eq("user_id", user.id);

      if (error) throw error;

      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  if (authLoading || loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-primary font-mono flex items-center gap-2">
            <Terminal className="w-6 h-6 animate-spin" />
            Loading profile...
          </div>
        </div>
      </Layout>
    );
  }

  if (!user) return null;

  const overallProgress = learningProgress.length > 0
    ? Math.round(learningProgress.reduce((acc, p) => acc + p.progress_percentage, 0) / learningProgress.length)
    : 0;

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <GlitchText text="AGENT PROFILE" className="text-3xl md:text-4xl font-bold mb-4" as="h1" />
              <p className="text-muted-foreground font-mono">
                // manage your vigilante identity
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 text-center">
                    <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/50">
                      <User className="w-12 h-12 text-primary" />
                    </div>
                    <h2 className="mt-4 text-xl font-bold font-mono text-primary">
                      {profile.username || "Anonymous Agent"}
                    </h2>
                    <p className="text-sm text-muted-foreground font-mono">{user.email}</p>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-mono flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Username
                      </Label>
                      <Input
                        value={profile.username || ""}
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                        placeholder="Your hacker alias"
                        className="bg-background/50 border-primary/30 font-mono"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-mono flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Bio
                      </Label>
                      <Textarea
                        value={profile.bio || ""}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        placeholder="Tell us about yourself..."
                        className="bg-background/50 border-primary/30 font-mono min-h-[100px]"
                      />
                    </div>

                    <Button
                      onClick={handleUpdateProfile}
                      disabled={isUpdating}
                      className="w-full font-mono"
                      variant="hero"
                    >
                      {isUpdating ? (
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      ) : (
                        <Save className="w-4 h-4 mr-2" />
                      )}
                      Save Profile
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Stats & Progress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-card/80 border border-primary/30 rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-primary">{overallProgress}%</p>
                    <p className="text-xs text-muted-foreground font-mono">Overall Progress</p>
                  </div>
                  <div className="bg-card/80 border border-primary/30 rounded-lg p-4 text-center">
                    <BookOpen className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="text-2xl font-bold text-accent">{learningProgress.length}</p>
                    <p className="text-xs text-muted-foreground font-mono">Topics Started</p>
                  </div>
                  <div className="bg-card/80 border border-primary/30 rounded-lg p-4 text-center">
                    <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-red-500">{favorites.length}</p>
                    <p className="text-xs text-muted-foreground font-mono">Saved Resources</p>
                  </div>
                </div>

                {/* Learning Progress */}
                <div className="bg-card/80 border border-primary/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold font-mono flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Learning Progress
                  </h3>
                  
                  {learningProgress.length > 0 ? (
                    <div className="space-y-4">
                      {learningProgress.slice(0, 5).map((item) => (
                        <div key={item.id} className="space-y-2">
                          <div className="flex justify-between text-sm font-mono">
                            <span>{item.topic}</span>
                            <span className="text-primary">{item.progress_percentage}%</span>
                          </div>
                          <Progress value={item.progress_percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="font-mono text-sm">No learning progress yet</p>
                      <p className="text-xs mt-2">Start exploring topics to track your journey!</p>
                    </div>
                  )}
                </div>

                {/* Favorite Resources */}
                <div className="bg-card/80 border border-primary/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold font-mono flex items-center gap-2 mb-4">
                    <Heart className="w-5 h-5 text-red-500" />
                    Saved Resources
                  </h3>
                  
                  {favorites.length > 0 ? (
                    <div className="grid gap-3">
                      {favorites.slice(0, 5).map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/50">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="font-mono text-sm truncate">{item.resource_title}</p>
                            <p className="text-xs text-muted-foreground">{item.resource_type}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Heart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="font-mono text-sm">No saved resources yet</p>
                      <p className="text-xs mt-2">Browse resources and save your favorites!</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
