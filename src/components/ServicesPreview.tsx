import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Sparkles, Heart, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Men's Haircuts & Grooming",
    description: "Professional cuts, fades, beard trims, and styling",
    icon: Scissors,
    color: "text-primary"
  },
  {
    id: 2,
    title: "Women's Dreadlocks & Styling",
    description: "Expert dreadlock creation, maintenance, and styling",
    icon: Sparkles,
    color: "text-secondary"
  },
  {
    id: 3,
    title: "Kids Haircuts",
    description: "Gentle, fun cuts for boys and girls of all ages",
    icon: Heart,
    color: "text-accent"
  },
  {
    id: 4,
    title: "Hair Treatments & Coloring",
    description: "Professional treatments and color services",
    icon: Palette,
    color: "text-success"
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From precision cuts to intricate dreadlock styling, we offer premium services for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-background rounded-full shadow-soft">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="premium" size="lg" className="text-lg px-8">
              Explore All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;