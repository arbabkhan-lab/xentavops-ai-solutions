import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sudarshan Kamath",
    role: "Founder & CEO",
    company: "smallest.ai",
    content: "As a solo founder bootstrapping an AI tool for enterprises, I needed quick, high-quality visuals to pitch to early users without hiring a full design team. Xentavops' AI Creative Designing service nailed it—generated pixel-perfect infographics and slide decks from my rough sketches in under 48 hours. Saved me weeks and landed my first beta client. Highly recommend for lean startups.",
    rating: 5
  },
  {
    id: 2,
    name: "Saidmar Eugenia Contreras Bigott",
    role: "Founder & CEO",
    company: "Busi",
    content: "Running a transportation admin platform in a tough market meant our branding had to pop on every social post and flyer. Xentavops' Creative Graphic Designing turned our basic logos into professional banners and Instagram stories that actually drove sign-ups. Their niche-specific tweaks for Venezuela's logistics scene were spot-on—our engagement doubled in a month.",
    rating: 5
  },
  {
    id: 3,
    name: "Woody Klemetson",
    role: "Founder and CEO",
    company: "AskElephant",
    content: "Explaining AI sales coaching in short videos was a headache until Xentavops' AI Creative Video Generation & Editing team stepped in. They built a 10-minute explainer from my script, complete with avatar narration and smooth transitions, all under budget. It went viral on LinkedIn, pulling in 15 qualified leads. If you're a sales-tech startup, this is your shortcut to polished content.",
    rating: 5
  },
  {
    id: 4,
    name: "Tom Schroth",
    role: "Founder",
    company: "Elements 5 Spa",
    content: "With a small wellness spa just starting out, social media felt overwhelming. Xentavops handled our Social Media Marketing end-to-end—content calendars, daily posts, and targeted Instagram ads that boosted foot traffic by 40% in the first quarter. Their engagement strategies fit our local vibe perfectly, without the big-agency price tag.",
    rating: 5
  },
  {
    id: 5,
    name: "Adam Guild",
    role: "Co-founder & CEO",
    company: "Owner.com",
    content: "We were launching a restaurant tech platform and needed SEO juice fast to rank for 'online ordering tools.' Xentavops' SEO Blog & Content Writing delivered three in-depth posts with killer keyword research that hit page one on Google within weeks. Traffic to our site jumped 150%, and we're seeing steady inquiries.",
    rating: 5
  },
  {
    id: 6,
    name: "Jeff Hoffman",
    role: "Founder",
    company: "World Youth Horizons",
    content: "Non-profits like ours can't afford custom dev delays, so Xentavops' WordPress Designing & Development built our donor portal with Elementor Pro—mobile-ready, SEO-optimized, and integrated with our email tools in record time. Donations are up 25% thanks to the seamless user experience.",
    rating: 5
  },
  {
    id: 7,
    name: "Ian Small",
    role: "CEO",
    company: "Blues",
    content: "Scaling a privacy tech startup meant upskilling our remote team on AI tools without derailing ops. Xentavops Academy's freelancing and AI courses were a lifesaver—practical modules on ChatGPT for outreach and Midjourney for mocks that our devs applied immediately. Two team members landed side gigs, and our productivity spiked.",
    rating: 5
  },
  {
    id: 8,
    name: "Matt Gray",
    role: "Founder & CEO",
    company: "Founder OS",
    content: "Competitor analysis was eating our time as we grew our creator community. Xentavops' Data Analytics & Insights scraped key metrics from rival LinkedIn groups and built a clean dashboard that highlighted untapped niches—leading to a 30% follower boost. Their ethical web extraction kept us compliant, and the fresh leads were gold.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      checkScroll();
    }
    return () => ref?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from businesses that transformed their operations with Xentavops
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-end gap-3 mb-8">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              canScrollLeft 
                ? 'bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary' 
                : 'bg-muted/50 text-muted-foreground/50 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              canScrollRight 
                ? 'bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary' 
                : 'bg-muted/50 text-muted-foreground/50 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Testimonials Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-80 md:w-[420px] glass-card p-6 hover-lift"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <h4 className="text-foreground font-semibold">{testimonial.name}</h4>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
