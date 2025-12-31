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
    description:
      "Structured learning paths from beginner to advanced with expert mentorship.",
    link: "/guidance",
  },
  {
    icon: Trophy,
    title: "CTF & Learning",
    description:
      "Master Capture The Flag challenges with comprehensive write-ups and strategies.",
    link: "/ctf",
  },
  {
    icon: Users,
    title: "Community & Network",
    description:
      "Connect with like-minded security enthusiasts and professionals worldwide.",
    link: "/community",
  },
  {
    icon: Code,
    title: "Resources Hub",
    description:
      "Curated collection of tools, cheat sheets, books, and learning materials.",
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

      {/* ---------------- Hero ---------------- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border mb-8">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">$</span>{" "}
                ./welcome_to_vigilante_hackers
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <GlitchText className="block text-5xl md:text-7xl lg:text-8xl font-bold">
                Learn. Defend.
              </GlitchText>
              <span className="block mt-2 text-foreground">
                Break Ethically.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              A community of ethical hackers focused on learning, sharing
              knowledge, and defending the digital world responsibly.
            </p>

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
      </section>

      {/* ---------------- Stats ---------------- */}
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
                <div className="text-3xl font-mono text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Start Journey ---------------- */}
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
                Whether you are just starting out or already experienced,
                Vigilante Hackers grows with you.
              </p>

              {/* Terminal-style replacement */}
              <div className="rounded-lg bg-card p-6 font-mono text-sm text-muted-foreground space-y-2 border border-border">
                <p>
                  <span className="text-primary">$</span> learn --hands-on
                </p>
                <p className="pl-4">
                  → CTFs, real vulnerabilities, practical skills
                </p>

                <p>
                  <span className="text-primary">$</span> collaborate --ethical
                </p>
                <p className="pl-4">
                  → Discussions, mentorship, team learning
                </p>

                <p>
                  <span className="text-primary">$</span> grow --professionally
                </p>
                <p className="pl-4">
                  → Write-ups, tools, real-world readiness
                </p>
              </div>

              <Button variant="outline" className="mt-8" asChild>
                <Link to="/guidance">
                  View Learning Paths{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
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
                  <p>$ whoami</p>
                  <p className="text-muted-foreground pl-4">ethical_hacker</p>
                  <p>$ cat mission.txt</p>
                  <p className="text-muted-foreground pl-4">
                    Learn. Share. Defend. Break Ethically.
                  </p>
                  <p>$ ./join_community.sh</p>
                  <p className="text-primary pl-4 animate-pulse">
                    Welcome to Vigilante Hackers
                  </p>
                </div>
              </TerminalCard>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
