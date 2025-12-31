import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { CyberCard } from "@/components/CyberCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  MessageCircle,
  Shield,
  Heart,
  Award,
  Calendar,
  ArrowRight,
  CheckCircle,
  XCircle,
  Github,
  Twitter,
} from "lucide-react";

const guidelines = [
  { rule: "Be respectful and supportive to all members", allowed: true },
  { rule: "Share knowledge and help others learn", allowed: true },
  { rule: "Ask thoughtful questions", allowed: true },
  { rule: "Promote responsible disclosure", allowed: true },
  { rule: "No illegal hacking discussions", allowed: false },
  { rule: "No sharing of exploits for malicious purposes", allowed: false },
  { rule: "No harassment or discrimination", allowed: false },
  { rule: "No spam or self-promotion without permission", allowed: false },
];

const platforms = [
  {
    name: "Discord",
    description: "Our main community hub for real-time discussions, CTF team-ups, and networking.",
    members: "3,000+",
    icon: MessageCircle,
    color: "bg-[#5865F2]",
    link: "#",
  },
  {
    name: "GitHub",
    description: "Contribute to community projects, tools, and resources.",
    members: "500+",
    icon: Github,
    color: "bg-foreground",
    link: "#",
  },
  {
    name: "Twitter/X",
    description: "Follow us for updates, security news, and community highlights.",
    members: "2,000+",
    icon: Twitter,
    color: "bg-foreground",
    link: "#",
  },
];

const contributionWays = [
  {
    icon: Shield,
    title: "Write CTF Write-ups",
    description: "Share your solutions and learning experiences from CTF challenges.",
  },
  {
    icon: Heart,
    title: "Mentor Others",
    description: "Help beginners navigate their cybersecurity journey.",
  },
  {
    icon: Award,
    title: "Contribute Resources",
    description: "Add valuable tools, books, or tutorials to our resource hub.",
  },
  {
    icon: Calendar,
    title: "Organize Events",
    description: "Host workshops, study groups, or community CTF events.",
  },
];

const Community = () => {
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
              <Users className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">5,000+ Members</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-gradient">Community</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Connect with ethical hackers, security enthusiasts, and professionals worldwide. 
              Learn together, grow together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Where to <span className="text-gradient">Find Us</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="block"
              >
                <CyberCard className="h-full group cursor-pointer text-center">
                  <div className={`w-16 h-16 ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <platform.icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-xl font-bold font-mono mb-2">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
                  <span className="text-primary font-mono font-semibold">
                    {platform.members} members
                  </span>
                </CyberCard>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Community <span className="text-gradient">Guidelines</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our community thrives on mutual respect and shared values. 
              Here's what we expect from all members.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {guidelines.map((item, index) => (
              <motion.div
                key={item.rule}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`flex items-center gap-3 p-4 rounded-lg border ${
                  item.allowed
                    ? "border-primary/30 bg-primary/5"
                    : "border-destructive/30 bg-destructive/5"
                }`}
              >
                {item.allowed ? (
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                )}
                <span className="text-sm">{item.rule}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How to <span className="text-gradient">Contribute</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              There are many ways to give back to the community and help others grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributionWays.map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CyberCard className="h-full text-center">
                  <way.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold font-mono mb-2">{way.title}</h3>
                  <p className="text-sm text-muted-foreground">{way.description}</p>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to <span className="text-gradient">Join</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Become part of a growing community of ethical hackers and security enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join Discord
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contact">
                  Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
