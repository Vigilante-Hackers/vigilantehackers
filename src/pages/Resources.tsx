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
} from "lucide-react";

const categories = ["All", "Books", "Tools", "Blogs", "Cheat Sheets", "Repos"];

const resources = [
  {
    title: "The Web Application Hacker's Handbook",
    category: "Books",
    description: "Comprehensive guide to web application security testing.",
    link: "#",
    icon: BookOpen,
  },
  {
    title: "Hacking: The Art of Exploitation",
    category: "Books",
    description: "Deep dive into exploitation techniques and low-level security.",
    link: "#",
    icon: BookOpen,
  },
  {
    title: "Burp Suite Professional",
    category: "Tools",
    description: "Industry-standard web application security testing tool.",
    link: "https://portswigger.net/burp",
    icon: Wrench,
  },
  {
    title: "Ghidra",
    category: "Tools",
    description: "NSA's open-source reverse engineering framework.",
    link: "https://ghidra-sre.org",
    icon: Wrench,
  },
  {
    title: "Metasploit Framework",
    category: "Tools",
    description: "World's most used penetration testing framework.",
    link: "https://metasploit.com",
    icon: Wrench,
  },
  {
    title: "PayloadsAllTheThings",
    category: "Repos",
    description: "Useful payloads and bypasses for web security.",
    link: "https://github.com/swisskyrepo/PayloadsAllTheThings",
    icon: Github,
  },
  {
    title: "HackTricks",
    category: "Blogs",
    description: "Comprehensive pentesting and CTF wiki.",
    link: "https://book.hacktricks.xyz",
    icon: FileText,
  },
  {
    title: "OWASP Cheat Sheet Series",
    category: "Cheat Sheets",
    description: "Concise collection of security best practices.",
    link: "https://cheatsheetseries.owasp.org",
    icon: Download,
  },
  {
    title: "Reverse Shell Cheat Sheet",
    category: "Cheat Sheets",
    description: "Quick reference for various reverse shell one-liners.",
    link: "#",
    icon: Download,
  },
  {
    title: "LinPEAS / WinPEAS",
    category: "Tools",
    description: "Privilege escalation enumeration scripts.",
    link: "https://github.com/carlospolop/PEASS-ng",
    icon: Wrench,
  },
  {
    title: "SecLists",
    category: "Repos",
    description: "Collection of multiple types of lists for security assessments.",
    link: "https://github.com/danielmiessler/SecLists",
    icon: Github,
  },
  {
    title: "PortSwigger Research",
    category: "Blogs",
    description: "Cutting-edge web security research and techniques.",
    link: "https://portswigger.net/research",
    icon: FileText,
  },
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <span className="font-mono text-sm text-muted-foreground">Knowledge Base</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Resources <span className="text-gradient">Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Curated collection of tools, books, blogs, and resources for your cybersecurity journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-y border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 text-sm font-mono rounded-lg transition-all whitespace-nowrap ${
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
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
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
                    <h3 className="text-lg font-bold font-mono mb-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <span className="inline-flex items-center text-sm text-primary font-mono">
                      Access <ExternalLink className="w-4 h-4 ml-1" />
                    </span>
                  </CyberCard>
                </a>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Have a Resource to <span className="text-gradient">Share</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Help grow our collection by suggesting valuable resources for the community.
            </p>
            <Button variant="outline" size="lg">
              <Github className="w-5 h-5 mr-2" />
              Contribute on GitHub
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
