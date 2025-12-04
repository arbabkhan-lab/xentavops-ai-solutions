import { Play, ArrowRight } from 'lucide-react';

const VideoSection = () => {
  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Side */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              {/* Video Placeholder with Play Button */}
              <div className="aspect-video bg-gradient-card flex items-center justify-center relative">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                
                {/* Play Button */}
                <a
                  href="https://xentavops.com/video.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500 animate-glow-pulse"
                >
                  <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                </a>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-20 h-20 border border-primary/20 rounded-xl animate-float" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50 -z-10 group-hover:opacity-75 transition-opacity duration-500" />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="text-primary text-sm font-medium">Our Vision</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Transforming Businesses Through{' '}
              <span className="text-gradient">AI Innovation</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              At Xentavops, we believe in the power of artificial intelligence to revolutionize 
              how businesses operate. Our mission is to make cutting-edge AI technology accessible 
              to companies of all sizes, helping them streamline operations, boost creativity, 
              and achieve unprecedented growth.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              With a team of experts passionate about innovation, we've helped hundreds of 
              businesses across the globe transform their digital presence, automate complex 
              processes, and unlock new opportunities for success.
            </p>

            <ul className="space-y-3">
              {[
                "500+ Projects Delivered Successfully",
                "50+ Countries Served Worldwide",
                "98% Client Satisfaction Rate",
                "24/7 Support & Consultation"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex btn-primary items-center gap-2 px-8 py-3 mt-4"
            >
              <span className="relative z-10">Learn More</span>
              <ArrowRight size={18} className="relative z-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
