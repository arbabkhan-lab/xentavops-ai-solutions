import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';
const Footer = () => {
  const socialLinks = [{
    icon: Facebook,
    href: 'https://xentavops.com/socialmedia.html'
  }, {
    icon: Instagram,
    href: 'https://xentavops.com/socialmedia.html'
  }, {
    icon: Twitter,
    href: 'https://xentavops.com/socialmedia.html'
  }, {
    icon: Linkedin,
    href: 'https://xentavops.com/socialmedia.html'
  }, {
    icon: Youtube,
    href: 'https://xentavops.com/socialmedia.html'
  }];
  return <footer className="relative bg-background border-t border-border/30">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 py-12 relative">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <img alt="Xentavops Logo" className="h-12 w-auto" src="/lovable-uploads/c3a920e1-2669-4776-a594-a26cbd8931af.png" />
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left max-w-xs">
              AI Powered Operations to accelerate the business growth
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-foreground font-semibold">Follow Us</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                  <social.icon size={18} />
                </a>)}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="text-foreground font-semibold">Contact Us</h4>
            <a href="tel:03351933205" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone size={16} />
              <span>03351933205</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Xentavops. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;