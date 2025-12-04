import { Linkedin, Twitter, Mail } from 'lucide-react';

const LeadershipSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden border border-border/50">
                <img
                  src="https://xentavops.com/ceo.jpg"
                  alt="CEO of Xentavops"
                  className="w-full aspect-[4/5] object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 glass-card p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-button flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">X</span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Founder & CEO</p>
                    <p className="text-muted-foreground text-sm">Xentavops</p>
                  </div>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50 -z-10 group-hover:opacity-75 transition-opacity duration-500" />
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-primary text-sm font-medium">Leadership</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Meet Our <span className="text-gradient">Visionary Leader</span>
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At the helm of Xentavops is a visionary entrepreneur dedicated to democratizing 
                  AI technology for businesses worldwide. With a deep understanding of both technology 
                  and business strategy, our leadership drives innovation at every level.
                </p>
                <p>
                  "Our mission is simple: to empower businesses with AI tools that were once 
                  available only to tech giants. Every company, regardless of size, deserves 
                  access to transformative technology that can accelerate their growth."
                </p>
                <p>
                  Under this leadership, Xentavops has grown from a small agency to a global 
                  force in AI-powered business solutions, serving clients across 50+ countries 
                  and delivering over 500 successful projects.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://xentavops.com/socialmedia.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://xentavops.com/socialmedia.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="mailto:contact@xentavops.com"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
