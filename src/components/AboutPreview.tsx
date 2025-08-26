import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About JEFF BARBERS & DREADLOCKS LTD
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We are a premier unisex barbershop dedicated to providing exceptional grooming services 
              for men, women, boys, and girls. Our expert team specializes in everything from classic 
              cuts to intricate dreadlock styling.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With years of experience and a passion for excellence, we combine traditional barbering 
              techniques with modern styling to create looks that enhance your natural beauty and confidence.
            </p>
            <Link to="/about">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Learn More About Us
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 shadow-luxury">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Expert stylists with years of experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Unisex services for the whole family
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Premium products and equipment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Comfortable, luxury environment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;