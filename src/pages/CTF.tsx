import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { CyberCard } from "@/components/CyberCard";
import { TerminalCard } from "@/components/TerminalCard";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Flag,
  Target,
  Code,
  Search,
  Lock,
  Terminal,
  FileText,
  ArrowRight,
  Zap,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const ctfCategories = [
  {
    icon: Code,
    title: "Web Exploitation",
    description: "SQL injection, XSS, CSRF, authentication bypasses, and more.",
    difficulty: "All Levels",
  },
  {
    icon: Lock,
    title: "Cryptography",
    description: "Classical ciphers, modern encryption, hash cracking, and crypto attacks.",
    difficulty: "Intermediate",
  },
  {
    icon: Terminal,
    title: "Reverse Engineering",
    description: "Binary analysis, disassembly, debugging, and malware analysis.",
    difficulty: "Advanced",
  },
  {
    icon: Search,
    title: "Forensics",
    description: "Memory forensics, disk analysis, network captures, and steganography.",
    difficulty: "Intermediate",
  },
  {
    icon: Target,
    title: "Pwn / Binary Exploitation",
    description: "Buffer overflows, ROP chains, heap exploitation, and shellcoding.",
    difficulty: "Advanced",
  },
  {
    icon: FileText,
    title: "OSINT",
    description: "Open source intelligence, reconnaissance, and information gathering.",
    difficulty: "Beginner",
  },
];

const recentWriteups = [
  {
    title: "SQL Injection in Login Bypass",
    category: "Web",
    difficulty: "Easy",
    author: "h4ck3r_01",
  },
  {
    title: "RSA Common Modulus Attack",
    category: "Crypto",
    difficulty: "Medium",
    author: "crypto_ninja",
  },
  {
    title: "Format String Vulnerability",
    category: "Pwn",
    difficulty: "Hard",
    author: "pwn_master",
  },
  {
    title: "Hidden Data in PNG Metadata",
    category: "Forensics",
    difficulty: "Easy",
    author: "forensics_pro",
  },
];

const tools = [
  { name: "Burp Suite", category: "Web" },
  { name: "Ghidra", category: "Reversing" },
  { name: "Wireshark", category: "Network" },
  { name: "GDB + Pwntools", category: "Pwn" },
  { name: "CyberChef", category: "Crypto" },
  { name: "Volatility", category: "Forensics" },
  { name: "Nmap", category: "Recon" },
  { name: "John the Ripper", category: "Password" },
];

const CTF = () => {
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
              <Trophy className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">Capture The Flag</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CTF & <span className="text-gradient">Discussions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Master CTF challenges, learn from write-ups, and discuss strategies with the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is CTF */}
      <section className="py-16 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                What is <span className="text-gradient">CTF</span>?
              </h2>
              <p className="text-muted-foreground mb-6">
                Capture The Flag (CTF) competitions are cybersecurity challenges where 
                participants solve security puzzles to find hidden "flags" - secret strings 
                that prove you've solved the challenge.
              </p>
              <ul className="space-y-4">
                {[
                  "Learn practical hacking skills in a legal environment",
                  "Compete individually or as part of a team",
                  "Build problem-solving and analytical thinking",
                  "Prepare for real-world security scenarios",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Flag className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <TerminalCard title="ctf@vigilante:~">
                <div className="space-y-2 text-primary">
                  <p><span className="text-secondary">$</span> cat flag.txt</p>
                  <p className="text-muted-foreground pl-4">flag{'{'}welcome_to_ctf{'}'}</p>
                  <p><span className="text-secondary">$</span> ./solve_challenge.py</p>
                  <p className="text-muted-foreground pl-4">[*] Analyzing binary...</p>
                  <p className="text-muted-foreground pl-4">[+] Vulnerability found!</p>
                  <p className="text-muted-foreground pl-4">[+] Exploiting...</p>
                  <p className="text-primary pl-4">flag{'{'}you_got_the_flag{'}'}</p>
                  <p><span className="text-secondary">$</span> <span className="animate-pulse">_</span></p>
                </div>
              </TerminalCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTF Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Challenge <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CTF challenges are divided into various categories, each testing different skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ctfCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CyberCard className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <category.icon className="w-10 h-10 text-primary" />
                    <span className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded">
                      {category.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-mono mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Writeups */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Recent <span className="text-gradient">Write-ups</span>
            </h2>
            <p className="text-muted-foreground">
              Learn from community solutions to past challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {recentWriteups.map((writeup, index) => (
              <motion.div
                key={writeup.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CyberCard className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-mono font-semibold group-hover:text-primary transition-colors">
                      {writeup.title}
                    </h4>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{writeup.category}</span>
                      <span>•</span>
                      <span>{writeup.difficulty}</span>
                      <span>•</span>
                      <span>@{writeup.author}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Essential <span className="text-gradient">Tools</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-lg border border-border bg-card hover:border-primary/50 transition-all cursor-pointer group"
              >
                <span className="font-mono group-hover:text-primary transition-colors">
                  {tool.name}
                </span>
                <span className="ml-2 text-xs text-muted-foreground">{tool.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discussion CTA */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Join the <span className="text-gradient">Discussion</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Stuck on a challenge? Want to discuss strategies? Our community is here to help.
                Share ideas, ask questions, and learn together.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "CTF strategy discussions",
                  "Tool recommendations",
                  "Challenge walkthrough concepts",
                  "Team formation for competitions",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" asChild>
                <Link to="/community">
                  Join Community <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-1 rounded-lg bg-gradient-to-r from-primary/50 to-secondary/50"
            >
              <div className="rounded-lg bg-card p-8">
                <h3 className="text-xl font-bold font-mono mb-4 flex items-center gap-2">
                  <Flag className="w-5 h-5 text-primary" />
                  Community Guidelines
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>❌ No sharing flags for active competitions</li>
                  <li>✅ Share concepts and techniques, not direct answers</li>
                  <li>✅ Help others learn, don't just give solutions</li>
                  <li>✅ Be respectful and supportive</li>
                  <li>✅ Ask thoughtful questions</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CTF;
