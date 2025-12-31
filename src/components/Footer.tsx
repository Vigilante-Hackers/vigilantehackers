import { Link } from "react-router-dom";
import { Shield, Terminal, Github, Twitter, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative">
                <Shield className="w-8 h-8 text-primary" />
                <Terminal className="w-4 h-4 text-primary absolute -bottom-1 -right-1" />
              </div>
              <span className="font-mono font-bold text-lg">
                <span className="text-primary">Vigilante</span>Hackers
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering ethical hackers, promoting learning, and creating a strong collaborative cybersecurity ecosystem.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Guidance", "CTF", "Resources"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Learning Paths", "CTF Writeups", "Tools", "Community Guidelines", "Blog"].map((link) => (
                <li key={link}>
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Code of Conduct", "Ethical Guidelines"].map((link) => (
                <li key={link}>
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-mono">
              © {new Date().getFullYear()} Vigilante Hackers Community. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="text-primary">⚡</span> Built for ethical hackers, by ethical hackers
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-muted/50 border-t border-border py-4">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground text-center">
            <strong className="text-foreground">Disclaimer:</strong> All content on this platform is for educational purposes only. 
            We strictly prohibit any illegal hacking activities. Always obtain proper authorization before testing security.
          </p>
        </div>
      </div>
    </footer>
  );
};
