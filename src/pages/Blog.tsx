import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { CyberCard } from "@/components/CyberCard";
import { Button } from "@/components/ui/button";
import { FileText, Bell, ArrowRight, Sparkles } from "lucide-react";

const upcomingContent = [
  "Security research & vulnerability explanations",
  "CTF write-ups and challenge walkthroughs",
  "Career guidance & certification tips",
  "Tool tutorials and reviews",
  "Industry news and analysis",
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative min-h-[70vh] flex items-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-primary">Coming Soon</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The <span className="text-gradient">Vigilante</span> Blog
            </h1>
            
            <p className="text-lg text-muted-foreground mb-12">
              We're working on bringing you high-quality cybersecurity content, 
              research articles, and community insights. Stay tuned!
            </p>

            {/* Coming Soon Animation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative inline-block"
            >
              <div className="w-32 h-32 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                <div className="absolute inset-4 bg-primary/10 rounded-full animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-primary" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              What to <span className="text-gradient">Expect</span>
            </h2>
            <p className="text-muted-foreground">
              Content we're preparing for our community.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {upcomingContent.map((content, index) => (
              <motion.div
                key={content}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card mb-4 hover:border-primary/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <span>{content}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <CyberCard className="text-center p-8">
              <Bell className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">
                Get Notified When We Launch
              </h2>
              <p className="text-muted-foreground mb-6">
                Be the first to know when the Vigilante Blog goes live. 
                No spam, just cybersecurity goodness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <Button variant="default" size="lg">
                  Notify Me
                </Button>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
