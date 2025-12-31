import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { CyberCard } from "@/components/CyberCard";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Globe,
  Cpu,
  Lock,
  Terminal,
  Shield,
  Cloud,
  Brain,
  ArrowRight,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const learningPaths = [
  {
    level: "Beginner",
    color: "text-green-400",
    borderColor: "border-green-400/30",
    topics: [
      "Linux fundamentals",
      "Networking basics",
      "Web technologies (HTML, CSS, JS)",
      "Introduction to Python",
      "Basic security concepts",
    ],
    duration: "2-3 months",
  },
  {
    level: "Intermediate",
    color: "text-yellow-400",
    borderColor: "border-yellow-400/30",
    topics: [
      "OWASP Top 10",
      "Network scanning & enumeration",
      "Basic exploitation techniques",
      "Web application testing",
      "Scripting for automation",
    ],
    duration: "4-6 months",
  },
  {
    level: "Advanced",
    color: "text-red-400",
    borderColor: "border-red-400/30",
    topics: [
      "Advanced exploitation",
      "Malware analysis",
      "Reverse engineering",
      "Red team operations",
      "Security research",
    ],
    duration: "6-12 months",
  },
];

const securityDomains = [
  {
    icon: Globe,
    title: "Web Security",
    description: "Master OWASP Top 10, XSS, SQL injection, CSRF, and modern web vulnerabilities.",
    resources: ["PortSwigger Academy", "HackTheBox", "OWASP WebGoat"],
  },
  {
    icon: Cpu,
    title: "Network Security",
    description: "Learn network protocols, packet analysis, IDS/IPS, and network pentesting.",
    resources: ["Wireshark", "Nmap Mastery", "PentesterLab"],
  },
  {
    icon: Terminal,
    title: "Malware Analysis",
    description: "Analyze malicious software, understand behaviors, and develop detection signatures.",
    resources: ["Malware Unicorn", "SANS FOR610", "ANY.RUN"],
  },
  {
    icon: Lock,
    title: "Digital Forensics",
    description: "Investigate security incidents, recover evidence, and perform memory forensics.",
    resources: ["SANS DFIR", "Autopsy", "Volatility"],
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Secure cloud infrastructure on AWS, Azure, GCP and containerized environments.",
    resources: ["AWS Security", "CloudGoat", "Kubernetes Security"],
  },
  {
    icon: Brain,
    title: "AI Security",
    description: "Explore adversarial ML, AI-powered attacks, and securing AI/ML systems.",
    resources: ["Adversarial ML", "MITRE ATLAS", "AI Red Team"],
  },
];

const certifications = [
  { name: "CompTIA Security+", level: "Entry" },
  { name: "CEH (Certified Ethical Hacker)", level: "Intermediate" },
  { name: "OSCP", level: "Advanced" },
  { name: "PNPT", level: "Intermediate" },
  { name: "eJPT", level: "Entry" },
  { name: "CRTP", level: "Advanced" },
];

const externalResources = [
  { name: "TryHackMe", url: "https://tryhackme.com", description: "Gamified learning platform" },
  { name: "Hack The Box", url: "https://hackthebox.com", description: "Hands-on hacking labs" },
  { name: "PortSwigger Academy", url: "https://portswigger.net/web-security", description: "Web security training" },
  { name: "OWASP", url: "https://owasp.org", description: "Web security resources" },
  { name: "NIST", url: "https://nist.gov/cybersecurity", description: "Security frameworks" },
];

const Guidance = () => {
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
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">Learning Paths</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your <span className="text-gradient">Cybersecurity</span> Journey
            </h1>
            <p className="text-lg text-muted-foreground">
              Structured learning paths to guide you from beginner to advanced security professional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Learning <span className="text-gradient">Paths</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CyberCard className={`h-full border-t-4 ${path.borderColor}`}>
                  <div className={`text-sm font-mono ${path.color} mb-2`}>
                    {path.duration}
                  </div>
                  <h3 className="text-2xl font-bold font-mono mb-4">{path.level}</h3>
                  <ul className="space-y-3">
                    {path.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Domains */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Security <span className="text-gradient">Domains</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore different areas of cybersecurity and find your specialization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityDomains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CyberCard className="h-full">
                  <domain.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold font-mono mb-2">{domain.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{domain.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-mono text-primary mb-2">Recommended:</p>
                    <div className="flex flex-wrap gap-2">
                      {domain.resources.map((resource) => (
                        <span
                          key={resource}
                          className="px-2 py-1 text-xs bg-muted rounded border border-border"
                        >
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Recommended <span className="text-gradient">Certifications</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all text-center"
              >
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-mono font-semibold text-sm mb-1">{cert.name}</h4>
                <span className="text-xs text-muted-foreground">{cert.level}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              External <span className="text-gradient">Resources</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {externalResources.map((resource, index) => (
              <motion.a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-mono font-semibold group-hover:text-primary transition-colors">
                    {resource.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Need Personalized Guidance?</h2>
            <p className="text-muted-foreground mb-8">
              Connect with our community mentors who can help you chart your learning path.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/community">
                Join Our Community <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Guidance;
