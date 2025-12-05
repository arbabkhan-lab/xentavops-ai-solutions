import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 2 + 2 + 's',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
            <span className="text-gradient">Xentavops</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 font-light">
            AI Powered Operations to accelerate the business growth
          </p>

          {/* Video */}
          <div className="relative max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
            <video
              className="aspect-video w-full object-cover"
              src="https://xentavops.com/video1.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/923351933205"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex btn-primary text-lg px-10 py-4 animate-glow-pulse"
          >
            <span className="relative z-10">Contact Us</span>
          </a>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
