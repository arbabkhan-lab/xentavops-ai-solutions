import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "How Much Does Custom Software Really Cost in 2026?",
    excerpt: "A transparent, data-backed article revealing exact price ranges for MVP, mid-size, and enterprise-grade solutions, including hidden costs, team structures, and ways to save 30–50% without sacrificing quality.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80"
  },
  {
    id: 2,
    title: "10 Biggest Mistakes Companies Make When Hiring a Software Development Agency",
    excerpt: "Insider exposé on red flags, poor contracts, scope creep disasters, and communication breakdowns. Positions your agency as the trusted expert who does it differently.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
  },
  {
    id: 3,
    title: "From Idea to Launch in 90 Days: The Exact Agile Process We Use",
    excerpt: "Step-by-step breakdown of your proven methodology with real screenshots of Jira/Notion boards, sprint timelines, and client testimonials. Builds massive trust.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80"
  },
  {
    id: 4,
    title: "AI-Powered Custom Software in 2026: 7 Real-World Use Cases",
    excerpt: "Showcase practical AI integrations including predictive analytics dashboards, intelligent automation, computer vision, custom LLMs with mini case studies.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
  },
  {
    id: 5,
    title: "Outsource vs. In-House Development in 2026: The Math That Surprised Our Clients",
    excerpt: "Brutally honest comparison of total cost of ownership, speed, quality, and scalability. Includes updated salary benchmarks for developers worldwide.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
  },
  {
    id: 6,
    title: "The 2026 Tech Stack Our Clients Are Switching To",
    excerpt: "Reveal your current golden stack with performance benchmarks and migration stories. Positions you as forward-thinking and attracts tech-savvy founders.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80"
  }
];

const BlogsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blogs by <span className="text-gradient">Xentavops</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Insights, strategies, and industry knowledge to help you stay ahead
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Blog Cards Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href="#"
              className="flex-shrink-0 w-80 md:w-96 group"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="glass-card overflow-hidden hover-lift">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {blog.excerpt}
                  </p>
                  <span className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Blogs */}
        <div className="text-center mt-12">
          <a
            href="https://xentavops.com/blogs.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex btn-primary px-8 py-3"
          >
            <span className="relative z-10">View All Blogs</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
