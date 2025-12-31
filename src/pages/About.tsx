import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { CyberCard } from "@/components/CyberCard";
import { Shield, Target, Users, BookOpen, Heart, Scale, Lightbulb, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Responsibility",
    description: "We promote responsible disclosure and ethical behavior in all security research activities.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    description: "We believe in the free exchange of knowledge to elevate the entire security community.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Together we achieve more. We foster teamwork and mutual support among members.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "The cybersecurity landscape evolves constantly. We embrace lifelong learning.",
  },
];

const milestones = [
  { year: "2023", event: "Vigilante Hackers founded by a group of passionate security enthusiasts" },
  { year: "2023", event: "First community CTF event with 100+ participants" },
  { year: "2024", event: "Launched structured learning paths and mentorship program" },
  { year: "2024", event: "Reached 5,000+ community members across 50+ countries" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Vigilante Hackers</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We are a community of ethical hackers, security researchers, and cybersecurity enthusiasts 
              dedicated to learning, sharing knowledge, and making the digital world safer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <CyberCard>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold font-mono">Our Mission</h2>
                </div>
                <p className="text-muted-foreground">
                  To empower individuals with the knowledge and skills needed to become ethical hackers, 
                  while fostering a supportive community that promotes responsible security research and 
                  defends against cyber threats.
                </p>
              </CyberCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <CyberCard>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                  <h2 className="text-2xl font-bold font-mono">Our Vision</h2>
                </div>
                <p className="text-muted-foreground">
                  To become the world's most inclusive and impactful cybersecurity community, where 
                  aspiring hackers transform into skilled defenders, and knowledge flows freely to 
                  create a safer digital future for everyone.
                </p>
              </CyberCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do as a community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CyberCard className="h-full text-center">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold font-mono mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Guidelines */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-10 h-10 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ethical <span className="text-gradient">Boundaries</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                At Vigilante Hackers, we strictly adhere to legal and ethical boundaries. 
                We believe that true security expertise comes from understanding both 
                offense and defense, but always within the bounds of the law.
              </p>
              <ul className="space-y-4">
                {[
                  "Always obtain proper authorization before testing",
                  "Practice responsible disclosure of vulnerabilities",
                  "Never engage in malicious hacking activities",
                  "Respect privacy and data protection laws",
                  "Share knowledge for defensive purposes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
              <CyberCard className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-destructive" />
                  <h3 className="text-xl font-bold font-mono">Our Story</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Vigilante Hackers was born from a simple idea: cybersecurity education 
                  should be accessible to everyone. Founded by a group of security professionals 
                  and enthusiasts, we started as a small Discord community sharing CTF write-ups 
                  and learning resources.
                </p>
                <p className="text-muted-foreground">
                  Today, we've grown into a thriving global community of thousands of members, 
                  all united by a passion for security and a commitment to ethical hacking. 
                  Our journey continues as we expand our resources, mentorship programs, and 
                  community events.
                </p>
              </CyberCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8"
              >
                <div className="flex-shrink-0 w-20">
                  <span className="font-mono font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-border pl-6 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
