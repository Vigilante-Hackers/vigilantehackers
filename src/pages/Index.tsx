import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/GlitchText";
import { CyberCard } from "@/components/CyberCard";
import { TerminalCard } from "@/components/TerminalCard";
import { MatrixRain } from "@/components/MatrixRain";
import {
  Shield,
  BookOpen,
  Users,
  Trophy,
  Terminal,
  Lock,
  Code,
  Cpu,
  ArrowRight,
  Zap,
  Target,
  Globe,
} from "lucide-react";

const stats = [
  { label: "Community Members", value: "5,000+", icon: Users },
  { label: "CTFs Solved", value: "1,200+", icon: Trophy },
  { label: "Write-ups", value: "500+", icon: BookOpen },
  { label: "Countries", value: "50+", icon: Globe },
];

const features = [
  {
    icon: BookOpen,
    title: "Guidance & Mentorship",
    description: "Structured learning paths from beginner to advanced with expert mentorship.",
    link: "/guidance",
  },
  {
    icon: Trophy,
    title: "CTF & Learning",
    description: "Master Capture The Flag challenges with comprehensive write-ups and strategies.",
    link: "/ctf",
  },
  {
    icon: Users,
    title: "Community & Network",
    description: "Connect with like-minded security enthusiasts and professionals worldwide.",
    link: "/community",
  },
  {
    icon: Code,
    title: "Resources Hub",
    description: "Curated collection of tools, cheat sheets, books, and learning materials.",
    link: "/resources",
  },
];

const learningTopics = [
  { icon: Globe, name: "Web Security" },
  { icon: Cpu, name: "Network Security" },
  { icon: Lock, name: "Cryptography" },
  { icon: Terminal, name: "Reverse Engineering" },
  { icon: Shield, name: "Malware Analysis" },
  { icon: Target, name: "Penetration Testing" },
];

const Index = () => {
  return (
    <Layout>
      <MatrixRain />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Terminal prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border mb-8"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">$</span> ./welcome_to_vigilante_hackers
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <GlitchText className="block text-5xl md:text-7xl lg:text-8xl font-bold">
                Learn. Defend.
              </GlitchText>
              <span className="block mt-2 text-foreground">Break Ethically.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join the community of ethical hackers dedicated to learning, sharing knowledge, 
              and defending the digital world through responsible security research.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/community">
                  <Users className="w-5 h-5 mr-2" />
                  Join the Community
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/resources">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Resources
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold font-mono text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to start your cybersecurity journey and grow as an ethical hacker.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={feature.link}>
                  <CyberCard className="h-full group cursor-pointer">
                    <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold font-mono mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                    <span className="inline-flex items-center text-sm text-primary font-mono">
                      Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CyberCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Topics */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Master <span className="text-gradient">Cybersecurity</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore diverse security domains and build expertise across multiple areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {learningTopics.map((topic, index) => (
              <motion.div
                key={topic.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col items-center p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
                  <topic.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-mono text-center">{topic.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Start Your <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Whether you're a complete beginner or an experienced security professional, 
                Vigilante Hackers provides the resources and community support you need to 
                excel in cybersecurity.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Structured learning paths for all skill levels",
                  "Hands-on CTF challenges and write-ups",
                  "Mentorship from experienced professionals",
                  "Active community discussions and networking",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" asChild>
                <Link to="/guidance">
                  View Learning Paths <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <TerminalCard title="vigilante@hackers:~">
                <div className="space-y-2 text-primary">
                  <p><span className="text-secondary">$</span> whoami</p>
                  <p className="text-muted-foreground pl-4">ethical_hacker</p>
                  <p><span className="text-secondary">$</span> cat mission.txt</p>
                  <p className="text-muted-foreground pl-4">Learn. Share. Defend. Break Ethically.</p>
                  <p><span className="text-secondary">$</span> ls skills/</p>
                  <p className="text-muted-foreground pl-4">web_security/ network_security/ crypto/ forensics/ malware_analysis/</p>
                  <p><span className="text-secondary">$</span> ./join_community.sh</p>
                  <p className="text-primary pl-4 animate-pulse">Welcome to Vigilante Hackers! 🛡️</p>
                  <p><span className="text-secondary">$</span> <span className="animate-pulse">_</span></p>
                </div>
              </TerminalCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Level Up</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of ethical hackers who are learning, growing, and making the digital world safer together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
