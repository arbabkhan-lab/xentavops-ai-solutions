import { useState } from 'react';
import { Palette, Image, Video, Share2, FileText, Globe, GraduationCap, BarChart3, X } from 'lucide-react';

interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  services: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: Palette,
    title: "AI Creative Designing",
    description: "Transform your ideas into breathtaking visuals in seconds using the latest AI technology. We deliver high-quality, customized designs that captivate your audience.",
    services: [
      "AI-powered image generation, upscaling, enhancement, and pixel restoration",
      "Old photo colorization, background removal, and object removal/addition",
      "AI-generated presentations, infographics, and professional slide decks",
      "Logo design, complete brand kits, and visual identity creation using AI tools"
    ]
  },
  {
    id: 2,
    icon: Image,
    title: "Creative Graphic Designing",
    description: "Professional, eye-catching designs tailored to your brand and niche, crafted with precision and creativity to make you stand out in any market.",
    services: [
      "Flyers, posters, banners, business cards, brochures, and print materials",
      "YouTube thumbnails, channel art, end screens, and video graphics",
      "LinkedIn banners, profile optimization visuals, and company page graphics",
      "Complete social media post packages (Instagram, Facebook, Twitter/X, etc.)",
      "Packaging design, merchandise mockups, and marketing collateral"
    ]
  },
  {
    id: 3,
    icon: Video,
    title: "AI Creative Video Generation & Editing",
    description: "Create compelling, high-quality videos from scratch using AI or enhance your existing footage with professional-grade editing and effects.",
    services: [
      "Full AI video generation (up to 25+ minutes) from text or images",
      "Talking avatar videos, text-to-video, and image-to-video creation",
      "Professional video editing, color grading, transitions, and sound design",
      "Logo animations, intros, outros, and motion graphics",
      "Short-form content for Instagram Reels, TikTok, YouTube Shorts, and LinkedIn"
    ]
  },
  {
    id: 4,
    icon: Share2,
    title: "Social Media Marketing & Management",
    description: "Grow your brand's online presence with expert strategy, consistent posting, and results-driven advertising campaigns across all major platforms.",
    services: [
      "Complete social media account management and daily posting",
      "Content calendar planning, creation, and automated scheduling",
      "Targeted ad campaigns (Meta Ads, Google Ads, TikTok Ads, YouTube Ads)",
      "Audience growth, engagement boosting, and community management",
      "Lead generation and conversion-focused advertising strategies"
    ]
  },
  {
    id: 5,
    icon: FileText,
    title: "SEO-Optimized Blog & Content Writing",
    description: "Rank higher on Google with well-researched, engaging, and fully SEO-optimized articles and blog posts tailored to your industry and goals.",
    services: [
      "In-depth keyword research and competitor analysis",
      "Long-form, high-ranking blog posts (1,500–5,000+ words)",
      "On-page SEO optimization (meta tags, headings, schema, internal linking)",
      "Topic cluster and pillar page content strategies",
      "Authority-building guest posts and niche-specific content"
    ]
  },
  {
    id: 6,
    icon: Globe,
    title: "WordPress Website Design & Development",
    description: "Get a fast, beautiful, and conversion-optimized WordPress website built with premium tools and custom functionality.",
    services: [
      "Custom website design using Elementor Pro and premium themes",
      "E-commerce stores (WooCommerce), membership sites, and booking platforms",
      "Full mobile responsiveness, speed optimization, and on-page SEO",
      "Custom features, API integrations, and third-party tool connections",
      "Ongoing maintenance, updates, backups, and security"
    ]
  },
  {
    id: 7,
    icon: GraduationCap,
    title: "Xentavops Academy – AI & Freelancing Training",
    description: "Learn how to master AI tools and build a profitable freelancing career with practical, step-by-step courses designed for real-world success.",
    services: [
      "Mastering AI tools for design, content, and video (ChatGPT, Midjourney, Leonardo, etc.)",
      "Winning clients on Upwork, Fiverr, and through direct outreach",
      "Building a personal brand and growing income as a freelancer",
      "Social media marketing and monetization strategies",
      "Scaling your freelance business and creating passive income streams"
    ]
  },
  {
    id: 8,
    icon: BarChart3,
    title: "Data Analytics & Lead Generation Insights",
    description: "Access fresh, accurate, and actionable data to fuel your marketing, sales, and growth strategies.",
    services: [
      "Fresh B2B/B2C lead generation (any niche, any location)",
      "Web scraping and data extraction from websites, directories, and maps",
      "Competitor and influencer social media analytics",
      "Comment, review, and sentiment analysis",
      "Custom one-page AI-powered visual dashboards and reports"
    ]
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive AI-powered solutions to transform your business and accelerate growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card group cursor-pointer perspective-1000"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedService(service)}
            >
              {/* 3D Icon */}
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-button flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                {service.description}
              </p>

              {/* Learn More Button */}
              <button className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <span className="text-lg">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto glass-card p-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-button flex items-center justify-center">
              <selectedService.icon className="w-10 h-10 text-primary-foreground" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {selectedService.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground mb-6">
              {selectedService.description}
            </p>

            {/* Services Include */}
            <h4 className="text-lg font-semibold text-foreground mb-4">Services Include:</h4>
            <ul className="space-y-3 mb-8">
              {selectedService.services.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="https://wa.me/923351933205"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex btn-primary text-lg px-8 py-3 w-full justify-center"
            >
              <span className="relative z-10">Let's Start</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
