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
  Youtube,
  Instagram,
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
              <span className="font-mono text-sm text-muted-foreground">
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Want to join the community or have questions? We'd love to hear from
              you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
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
                <h2 className="text-2xl font-bold font-mono mb-6">
                  Join / Contact Form
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary"
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
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <select
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        experience: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-mono text-sm"
                  >
                    <option value="">Select your level</option>
                    {experienceLevels.map((level) => (
                      <option key={level}>{level}</option>
                    ))}
                  </select>

                  {/* Interests */}
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-mono ${
                          formData.interests.includes(interest)
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg font-mono text-sm"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full">
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </Button>
                </form>
              </CyberCard>
            </motion.div>

            {/* Quick Connect */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <CyberCard>
                <h3 className="text-lg font-bold font-mono mb-4">
                  Quick Connect
                </h3>

                <div className="space-y-4">
                  <SocialLink
                    icon={<MessageCircle className="w-6 h-6 text-primary" />}
                    title="Discord"
                    subtitle="Join our server"
                    link="https://discord.gg/pQTWB2USjX"
                  />

                  <SocialLink
                    icon={<Github className="w-6 h-6" />}
                    title="GitHub"
                    subtitle="Open source projects"
                    link="https://github.com/Vigilante-Hackers/vigilantehackers"
                  />

                  <SocialLink
                    icon={<Twitter className="w-6 h-6" />}
                    title="Twitter / X"
                    subtitle="Security updates"
                    link="https://x.com/Timelessde96163"
                  />

                  <SocialLink
                    icon={<Shield className="w-6 h-6 text-primary" />}
                    title="LinkedIn"
                    subtitle="Professional presence"
                    link="https://www.linkedin.com/company/vigilante-hackers/"
                  />

                  <SocialLink
                    icon={<Instagram className="w-6 h-6 text-pink-500" />}
                    title="Instagram"
                    subtitle="Community posts"
                    link="https://www.instagram.com/vigilantehackers"
                  />

                  <SocialLink
                    icon={<Youtube className="w-6 h-6 text-red-500" />}
                    title="YouTube"
                    subtitle="Tutorials & content"
                    link="https://youtube.com/@vigilantehackers-d9v"
                  />

                  <SocialLink
                    icon={<Mail className="w-6 h-6 text-primary" />}
                    title="Email"
                    subtitle="vigilantehackerscommunity@gmail.com"
                    link="mailto:vigilantehackerscommunity@gmail.com"
                  />
                </div>
              </CyberCard>

              <CyberCard className="bg-primary/5 border-primary/30">
                <div className="flex gap-4">
                  <Shield className="w-8 h-8 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    We promote <strong>ethical & legal hacking only</strong>.
                    Any misuse of knowledge is strictly discouraged.
                  </p>
                </div>
              </CyberCard>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const SocialLink = ({
  icon,
  title,
  subtitle,
  link,
}: {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  link: string;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
  >
    {icon}
    <div>
      <div className="font-mono font-semibold">{title}</div>
      <div className="text-sm text-muted-foreground">{subtitle}</div>
    </div>
  </a>
);

export default Contact;
