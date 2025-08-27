import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroMens from "@/assets/hero-mens-barber.jpg";
import heroWomens from "@/assets/hero-womens-dreadlocks.jpg";
import heroKids from "@/assets/hero-kids-haircuts.jpg";

const slides = [
  {
    id: 1,
    image: heroMens,
    title: "Premium Men's Barbering",
    subtitle: "Expert cuts, fades, and beard styling",
    cta: "Discover Your Style"
  },
  {
    id: 2,
    image: heroWomens,
    title: "Professional Dreadlock Services",
    subtitle: "Styling, maintenance, and treatments for women",
    cta: "Transform Your Look"
  },
  {
    id: 3,
    image: heroKids,
    title: "Family-Friendly Cuts",
    subtitle: "Special care for boys and girls of all ages",
    cta: "Book for Kids"
  }
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen min-h-[800px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : 
            index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-2xl md:text-3xl mb-10 text-gray-200 animate-fade-in leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="text-lg px-8 py-4 animate-fade-in"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-secondary" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;