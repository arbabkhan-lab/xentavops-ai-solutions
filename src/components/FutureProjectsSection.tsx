import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Rocket, Brain, GraduationCap, Code, Briefcase, Globe } from 'lucide-react';

interface FutureProject {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const futureProjects: FutureProject[] = [
  {
    id: 1,
    title: "MBBS AI Mentor",
    description: "24/7 AI tutor that teaches FSc Pre-Medical syllabus, solves UHS-style MCQs, and gives daily study plans for PMC/NMDCAT prep. Perfect for medical aspirants who want personalized guidance.",
    icon: Brain
  },
  {
    id: 2,
    title: "MDCAT AI 2026",
    description: "Pakistan's smartest NMDCAT practice app – adaptive tests, weakness reports, video explanations in Urdu + English, 50,000+ verified MCQs for comprehensive exam preparation.",
    icon: GraduationCap
  },
  {
    id: 3,
    title: "ECAT AI Master",
    description: "Complete ECAT + NET preparation platform with topic-wise tests, virtual lab simulations for Physics/Chemistry, and university predictor to guide your engineering career path.",
    icon: Rocket
  },
  {
    id: 4,
    title: "RoboRang",
    description: "Free robotics & coding academy for Pakistani school kids – step-by-step Arduino + AI projects in Urdu, live workshops, and national competitions to nurture young innovators.",
    icon: Code
  },
  {
    id: 5,
    title: "AI for Pakistani Matric/O-Level",
    description: "AI teacher that explains 9th–10th Physics, Chemistry, Bio, and Maths in simple Urdu + Punjabi, with board paper solver for comprehensive exam preparation.",
    icon: GraduationCap
  },
  {
    id: 6,
    title: "Machine Learning Urdu",
    description: "First-ever complete Machine Learning + Deep Learning course in Urdu – from zero to building projects (100% free + paid certificate) for aspiring data scientists.",
    icon: Brain
  },
  {
    id: 7,
    title: "Daraz Seller AI",
    description: "AI tool for Pakistani e-commerce sellers – auto product descriptions, price optimization, trending keyword finder, and photo enhancer for Daraz/Bagallery success.",
    icon: Briefcase
  },
  {
    id: 8,
    title: "FurniScan AI",
    description: "AI interior designer for Pakistani furniture brands – upload room photo → get 3D furnished views with local furniture styles and prices for perfect home decoration.",
    icon: Globe
  },
  {
    id: 9,
    title: "Pak Medical Internship AI",
    description: "Matches medical graduates with house-job openings, prepares them for FCPS Part-1, and gives daily clinical case practice for career advancement.",
    icon: Brain
  },
  {
    id: 10,
    title: "Civil/EE AI Mentor",
    description: "AI tutor for Pakistani civil & electrical engineering students – solves NUST/PIEAS past papers, explains GATE-level concepts in Urdu for competitive exam prep.",
    icon: Code
  },
  {
    id: 11,
    title: "Freelancing AI Coach",
    description: "Guides Pakistani youth step-by-step to earn first $1,000 on Upwork/Fiverr using AI tools (profile, bids, portfolio) – in Urdu for accessible learning.",
    icon: Briefcase
  },
  {
    id: 12,
    title: "Village English AI",
    description: "Free spoken English + confidence app for rural Pakistani students – daily 5-minute lessons with AI voice practice and local accent support for accessible education.",
    icon: Globe
  }
];

const FutureProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<FutureProject | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <span className="text-primary text-sm font-medium">Coming Soon</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Future Projects & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Innovative solutions we're building to transform education and business in Pakistan
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

        {/* Projects Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {futureProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="flex-shrink-0 w-72 glass-card p-6 cursor-pointer hover-lift"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-button flex items-center justify-center mb-4">
                <project.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">
                {project.title}
              </h3>

              {/* Short Description */}
              <p className="text-muted-foreground text-sm line-clamp-2">
                {project.description.slice(0, 80)}...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-lg glass-card p-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-button flex items-center justify-center mb-6">
              <selectedProject.icon className="w-8 h-8 text-primary-foreground" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {selectedProject.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">Coming Soon</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FutureProjectsSection;
