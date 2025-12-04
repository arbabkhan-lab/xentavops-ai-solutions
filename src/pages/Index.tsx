import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BlogsSection from '@/components/BlogsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import VideoSection from '@/components/VideoSection';
import ProjectsSection from '@/components/ProjectsSection';
import LeadershipSection from '@/components/LeadershipSection';
import FutureProjectsSection from '@/components/FutureProjectsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BlogsSection />
        <TestimonialsSection />
        <VideoSection />
        <ProjectsSection />
        <LeadershipSection />
        <FutureProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
