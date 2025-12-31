import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { CyberCard } from "@/components/CyberCard";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Github,
  FileText,
  Wrench,
  Download,
  ExternalLink,
  Search,
  Filter,
  Terminal,
} from "lucide-react";

const categories = ["All", "Books", "Tools", "Blogs", "Cheat Sheets", "Repos"];

const resources = [
  {
    title: "The Web Application Hacker's Handbook",
    category: "Books",
    description:
      "Foundational reference for web application security testing.",
    link: "https://portswigger.net/web-security/web-application-hackers-handbook",
    icon: BookOpen,
    action: "Read",
  },
  {
    title: "Hacking: The Art of Exploitation",
    category: "Books",
    description:
      "Low-level exploitation, memory corruption, and debugging fundamentals.",
    link: "https://nostarch.com/hacking2.htm",
    icon: BookOpen,
    action: "Read",
  },
  {
    title: "Burp Suite",
    category: "Tools",
    description:
      "Industry-standard platform for web application security testing.",
    link: "https://portswigger.net/burp",
    icon: Wrench,
    action: "Use",
  },
  {
    title: "Ghidra",
    category: "Tools",
    description:
      "Open-source reverse engineering framework from the NSA.",
    link: "https://ghidra-sre.org",
    icon: Wrench,
    action: "Use",
  },
  {
    title: "Metasploit Framework",
    category: "Tools",
    description:
      "Penetration testing framework for exploit development and validation.",
    link: "https://www.metasploit.com",
    icon: Wrench,
    action: "Use",
  },
  {
    title: "PayloadsAllTheThings",
    category: "Repos",
    description:
      "Payload collection for common vulnerabilities and bypass techniques.",
    link: "https://github.com/swisskyrepo/PayloadsAllTheThings",
    icon: Github,
    action: "Clone",
  },
  {
    title: "HackTricks",
    category: "Blogs",
    description:
      "Practical pentesting and CTF knowledge base.",
    link: "https://book.hacktricks.xyz",
    icon: FileText,
    action: "Read",
  },
  {
    title: "OWASP Cheat Sheet Series",
    category: "Cheat Sheets",
    description:
      "Concise security best practices maintained by OWASP.",
    link: "https://cheatsheetseries.owasp.org",
    icon: Download,
    action: "Reference",
  },
  {
    title: "Reverse Shell Reference",
    category: "Cheat Sheets",
    description:
      "Common reverse shell techniques for multiple platforms.",
    link: "https://www.revshells.com",
    icon: Download,
    action: "Reference",
  },
  {
    title: "LinPEAS / WinPEAS",
    category: "Tools",
    description:
      "Privilege escalation enumeration scripts for Linux and Windows.",
    link: "https://github.com/carlospolop/PEASS-ng",
    icon: Wrench,
    action: "Use",
  },
  {
    title: "SecLists",
    category: "Repos",
    description:
      "Wordlists for fuzzing, discovery, and security testing.",
    link: "https://github.com/danielmiessler/SecLists",
    icon: Github,
    action: "Clone",
  },
  {
    title: "PortSwigger Research",
    category: "Blogs",
    description:
      "Advanced web security research and vulnerability techniques.",
    link: "https://portswigger.net/research",
    icon: FileText,
    action: "Read",
  },
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      activeCategory === "All" || resource.category === activeCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                Knowledge Base
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Resources <span className="text-gradient">Hub</span>
            </h1>

            <p className="text-lg text-muted-foreground">
              Carefully curated tools, books, and references used by real
              security practitioners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Search & Filter ---------------- */}
      <section className="py-8 border-y border-border bg-muted/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 text-sm font-mono rounded-lg ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Resources Grid ---------------- */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
            >
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <CyberCard className="h-full group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <resource.icon className="w-8 h-8 text-primary" />
                    <span className="px-2 py-1 text-xs font-mono bg-muted rounded">
                      {resource.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-mono mb-2 group-hover:text-primary">
                    {resource.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>

                  <span className="inline-flex items-center text-sm font-mono text-primary">
                    {resource.action}{" "}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </span>
                </CyberCard>
              </a>
            </motion.div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No resources match your query.
          </p>
        )}
      </section>

      {/* ---------------- Contribute CTA ---------------- */}
      <section className="py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Want to <span className="text-gradient">Contribute</span>?
            </h2>

            <p className="text-muted-foreground mb-8">
              Suggest tools, write-ups, or references that the community uses in
              real-world security work.
            </p>

            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/Vigilante-Hackers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                Contribute on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
