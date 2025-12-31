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
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const ctfCategories = [
  {
    icon: Code,
    title: "Web Exploitation",
    description:
      "SQL injection, XSS, CSRF, authentication bypasses, and more.",
    difficulty: "All Levels",
  },
  {
    icon: Lock,
    title: "Cryptography",
    description:
      "Classical ciphers, modern encryption, hash cracking, and crypto attacks.",
    difficulty: "Intermediate",
  },
  {
    icon: Terminal,
    title: "Reverse Engineering",
    description:
      "Binary analysis, disassembly, debugging, and malware analysis.",
    difficulty: "Advanced",
  },
  {
    icon: Search,
    title: "Forensics",
    description:
      "Memory forensics, disk analysis, network captures, and steganography.",
    difficulty: "Intermediate",
  },
  {
    icon: Target,
    title: "Pwn / Binary Exploitation",
    description:
      "Buffer overflows, ROP chains, heap exploitation, and shellcoding.",
    difficulty: "Advanced",
  },
  {
    icon: FileText,
    title: "OSINT",
    description:
      "Open source intelligence, reconnaissance, and information gathering.",
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
      {/* ---------------- Hero ---------------- */}
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
              <span className="font-mono text-sm text-muted-foreground">
                Capture The Flag
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CTF & <span className="text-gradient">Discussions</span>
            </h1>

            <p className="text-lg text-muted-foreground">
              Learn through challenges, explore write-ups, and grow with the
              community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- What is CTF ---------------- */}
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
                Capture The Flag (CTF) competitions simulate real-world security
                problems in a safe and legal environment.
              </p>

              <ul className="space-y-4">
                {[
                  "Hands-on learning with real vulnerabilities",
                  "Individual and team-based challenges",
                  "Problem-solving under pressure",
                  "Preparation for real security roles",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Flag className="w-5 h-5 text-primary mt-0.5" />
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
                  <p>$ cat flag.txt</p>
                  <p className="text-muted-foreground pl-4">
                    flag{"{"}welcome_to_ctf{"}"}
                  </p>
                  <p>$ ./solve_challenge.py</p>
                  <p className="text-muted-foreground pl-4">
                    [+] Exploit successful
                  </p>
                  <p className="text-primary pl-4">
                    flag{"{"}you_got_the_flag{"}"}
                  </p>
                </div>
              </TerminalCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- Community Principles ---------------- */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg bg-card p-8">
              <h3 className="text-xl font-bold font-mono mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" />
                Community Principles
              </h3>

              <div className="font-mono text-sm space-y-2 text-muted-foreground">
                <p><span className="text-primary">$</span> learn_by_doing</p>
                <p className="pl-4">
                  → Discuss techniques, tools, and thought processes
                </p>

                <p><span className="text-primary">$</span> respect_the_game</p>
                <p className="pl-4">
                  → No leaking flags or ruining active challenges
                </p>

                <p><span className="text-primary">$</span> build_each_other</p>
                <p className="pl-4">
                  → Help others grow instead of dropping answers
                </p>

                <p><span className="text-primary">$</span> stay_ethical</p>
                <p className="pl-4">
                  → Everything here is legal, ethical, and educational
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Discussion CTA ---------------- */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Join the <span className="text-gradient">Discussion</span>
            </h2>

            <p className="text-muted-foreground mb-8">
              Ask questions, share ideas, and collaborate with other CTF players.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://discord.gg/pQTWB2USjX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join Discord
                </a>
              </Button>

              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/community">
                  Community Page <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CTF;
