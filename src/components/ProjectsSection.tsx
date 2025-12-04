import { useEffect, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  tag: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Creative Designing",
    tag: "AI Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80"
  },
  {
    id: 2,
    title: "Creative Graphic Designing",
    tag: "Branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&q=80"
  },
  {
    id: 3,
    title: "AI Video Generation",
    tag: "Video Production",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&q=80"
  },
  {
    id: 4,
    title: "Social Media Marketing",
    tag: "Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80"
  },
  {
    id: 5,
    title: "SEO Content Writing",
    tag: "Content",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&q=80"
  },
  {
    id: 6,
    title: "WordPress Development",
    tag: "Web Dev",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80"
  },
  {
    id: 7,
    title: "Xentavops Academy",
    tag: "Education",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80"
  },
  {
    id: 8,
    title: "Data Analytics Dashboard",
    tag: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
  }
];

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll animation
  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 0.5;
      if (scrollPos >= scroll.scrollWidth / 2) {
        scrollPos = 0;
      }
      scroll.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of our finest work across various industries
          </p>
        </div>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden"
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 w-72 group"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card hover-lift">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-xs font-medium">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
