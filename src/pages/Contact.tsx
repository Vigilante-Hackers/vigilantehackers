import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { CyberCard } from "@/components/CyberCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  Github,
  Twitter,
  MessageCircle,
  Shield,
} from "lucide-react";

const experienceLevels = [
  "Complete Beginner",
  "Student/Learning",
  "Security Enthusiast",
  "Professional",
  "Expert/Researcher",
];

const interests = [
  "Web Security",
  "Network Security",
  "CTF Competitions",
  "Malware Analysis",
  "Reverse Engineering",
  "Cloud Security",
  "Career Guidance",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    interests: [] as string[],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      experience: "",
      interests: [],
      message: "",
    });
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Want to join the community or have questions? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <CyberCard className="p-8">
                <h2 className="text-2xl font-bold font-mono mb-6">Join / Contact Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Experience Level
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select your level</option>
                      {experienceLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Areas of Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className={`px-3 py-1.5 text-sm font-mono rounded-lg transition-all ${
                            formData.interests.includes(interest)
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about yourself or ask a question..."
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="hero" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CyberCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <CyberCard>
                <h3 className="text-lg font-bold font-mono mb-4">Quick Connect</h3>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-mono font-semibold">Discord</div>
                      <div className="text-sm text-muted-foreground">Join our server</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <Github className="w-6 h-6 text-foreground" />
                    <div>
                      <div className="font-mono font-semibold">GitHub</div>
                      <div className="text-sm text-muted-foreground">View our repos</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <Twitter className="w-6 h-6 text-foreground" />
                    <div>
                      <div className="font-mono font-semibold">Twitter/X</div>
                      <div className="text-sm text-muted-foreground">Follow updates</div>
                    </div>
                  </a>
                  <a
                    href="mailto:contact@vigilantehackers.com"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-mono font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">contact@vigilantehackers.com</div>
                    </div>
                  </a>
                </div>
              </CyberCard>

              <CyberCard className="bg-primary/5 border-primary/30">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold font-mono mb-2">Ethical Disclaimer</h3>
                    <p className="text-sm text-muted-foreground">
                      We strictly promote legal and ethical hacking practices. 
                      All activities discussed within our community must comply 
                      with applicable laws and regulations.
                    </p>
                  </div>
                </div>
              </CyberCard>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
