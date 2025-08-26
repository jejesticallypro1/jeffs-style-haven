import Navigation from "@/components/Navigation";
import HeroSlideshow from "@/components/HeroSlideshow";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import GalleryPreview from "@/components/GalleryPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSlideshow />
        <AboutPreview />
        <ServicesPreview />
        <GalleryPreview />
        <TestimonialsSection />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
