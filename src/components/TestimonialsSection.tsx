import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marcus Johnson",
    service: "Men's Fade & Beard Trim",
    rating: 5,
    comment: "Best barbershop in town! Jeff always delivers the perfect fade. Been coming here for 2 years and never disappointed.",
    image: "M.J."
  },
  {
    id: 2,
    name: "Aisha Williams",
    service: "Dreadlock Maintenance",
    rating: 5,
    comment: "Finally found someone who truly understands dreadlocks! The styling is amazing and they keep my locs healthy and beautiful.",
    image: "A.W."
  },
  {
    id: 3,
    name: "Sarah & Tommy Chen",
    service: "Family Haircuts",
    rating: 5,
    comment: "Great with kids! My son actually looks forward to his haircuts now. They make the whole family feel welcome.",
    image: "S.C."
  },
  {
    id: 4,
    name: "David Thompson",
    service: "Hair Treatment & Color",
    rating: 5,
    comment: "Professional color treatment that exceeded my expectations. The consultation was thorough and the results are fantastic!",
    image: "D.T."
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-lg text-white mb-6 italic leading-relaxed">
                        "{testimonial.comment}"
                      </p>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">
                          {testimonial.image}
                        </div>
                        <div className="text-left">
                          <h4 className="text-white font-semibold">{testimonial.name}</h4>
                          <p className="text-gray-300 text-sm">{testimonial.service}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-secondary" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;