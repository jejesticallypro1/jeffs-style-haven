import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Sparkles, Heart, Palette, Clock, Star, Users, Crown } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Men's Services",
      icon: Scissors,
      color: "text-primary",
      services: [
        {
          name: "Classic Haircuts",
          description: "Traditional and modern cuts tailored to your style",
          price: "From £25",
          duration: "30-45 min",
          popular: false
        },
        {
          name: "Precision Fades",
          description: "High, mid, and low fades with expert blending",
          price: "From £30",
          duration: "45-60 min",
          popular: true
        },
        {
          name: "Beard Trimming & Styling",
          description: "Professional beard shaping and maintenance",
          price: "From £20",
          duration: "20-30 min",
          popular: false
        },
        {
          name: "Hot Towel Shave",
          description: "Traditional straight razor shave with hot towels",
          price: "From £35",
          duration: "45 min",
          popular: false
        },
        {
          name: "Mustache Grooming",
          description: "Precision mustache trimming and styling",
          price: "From £15",
          duration: "15-20 min",
          popular: false
        },
        {
          name: "Hair Washing & Conditioning",
          description: "Deep cleansing and nourishing treatments",
          price: "From £10",
          duration: "15-20 min",
          popular: false
        }
      ]
    },
    {
      title: "Women's Services",
      icon: Sparkles,
      color: "text-secondary",
      services: [
        {
          name: "Dreadlock Installation",
          description: "Professional loc creation for all hair types",
          price: "From £150",
          duration: "4-6 hours",
          popular: true
        },
        {
          name: "Dreadlock Maintenance",
          description: "Root tightening and loc care",
          price: "From £80",
          duration: "2-3 hours",
          popular: true
        },
        {
          name: "Loc Styling & Updos",
          description: "Creative styling for special occasions",
          price: "From £45",
          duration: "45-60 min",
          popular: false
        },
        {
          name: "Natural Hair Cuts",
          description: "Cuts designed for natural textures",
          price: "From £40",
          duration: "45-60 min",
          popular: false
        },
        {
          name: "Protective Styling",
          description: "Braids, twists, and protective styles",
          price: "From £60",
          duration: "2-4 hours",
          popular: false
        },
        {
          name: "Deep Conditioning Treatments",
          description: "Intensive moisture and protein treatments",
          price: "From £25",
          duration: "45 min",
          popular: false
        }
      ]
    },
    {
      title: "Kids Services",
      icon: Heart,
      color: "text-accent",
      services: [
        {
          name: "Kids Haircuts (Boys)",
          description: "Fun and stylish cuts for boys of all ages",
          price: "From £20",
          duration: "30 min",
          popular: true
        },
        {
          name: "Kids Haircuts (Girls)",
          description: "Gentle cuts and styling for girls",
          price: "From £25",
          duration: "30-45 min",
          popular: true
        },
        {
          name: "First Haircut Special",
          description: "Memorable first haircut experience with certificate",
          price: "From £30",
          duration: "45 min",
          popular: false
        },
        {
          name: "Kids Styling",
          description: "Special occasion styling for children",
          price: "From £20",
          duration: "30 min",
          popular: false
        },
        {
          name: "Hair Braiding for Kids",
          description: "Simple braids and protective styles",
          price: "From £25",
          duration: "45-60 min",
          popular: false
        }
      ]
    },
    {
      title: "Premium Treatments",
      icon: Crown,
      color: "text-success",
      services: [
        {
          name: "Hair Coloring",
          description: "Professional color services and touch-ups",
          price: "From £60",
          duration: "2-3 hours",
          popular: false
        },
        {
          name: "Highlights & Lowlights",
          description: "Expert color placement and techniques",
          price: "From £80",
          duration: "2-4 hours",
          popular: false
        },
        {
          name: "Scalp Treatments",
          description: "Therapeutic scalp care and massage",
          price: "From £35",
          duration: "30-45 min",
          popular: false
        },
        {
          name: "Hair Straightening",
          description: "Temporary and semi-permanent straightening",
          price: "From £70",
          duration: "2-3 hours",
          popular: false
        },
        {
          name: "Eyebrow Trimming",
          description: "Professional eyebrow shaping and grooming",
          price: "From £15",
          duration: "15-20 min",
          popular: false
        },
        {
          name: "Hair Consultation",
          description: "Expert advice on cuts, styles, and treatments",
          price: "Free",
          duration: "15-30 min",
          popular: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-hero text-white overflow-hidden min-h-[600px]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Our Professional Services</h1>
            <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-10">
              Comprehensive grooming and styling services for men, women, boys, and girls. 
              From classic cuts to intricate dreadlock styling, we've got you covered.
            </p>
            <a 
              href="https://wa.me/447424665026?text=Hello! I'd like to book an appointment at Jeff Barbers & Dreadlocks LTD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="text-lg px-8">
                Book Your Service Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <category.icon className={`h-10 w-10 ${category.color}`} />
                    <h2 className="text-4xl font-bold">{category.title}</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 relative">
                      {service.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-secondary text-primary">
                          Most Popular
                        </Badge>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-secondary">{service.price}</span>
                          <div className="flex items-center space-x-1 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{service.duration}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">
                          {service.description}
                        </CardDescription>
                        <a 
                          href="https://wa.me/447424665026?text=Hello! I'd like to book a service at Jeff Barbers & Dreadlocks LTD"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <Button 
                            variant="outline" 
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                          >
                            Book This Service
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Save money with our popular service combinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-luxury transition-all duration-300 border-2 border-secondary/20">
              <CardHeader className="text-center">
                <Badge className="bg-secondary text-primary mb-4 w-fit mx-auto">Best Value</Badge>
                <CardTitle className="text-2xl">The Complete Gentleman</CardTitle>
                <div className="text-3xl font-bold text-secondary">£75</div>
                <CardDescription>Save £20 on individual services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-secondary mr-2" />
                    Premium Haircut & Fade
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-secondary mr-2" />
                    Beard Trimming & Styling
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-secondary mr-2" />
                    Hot Towel Treatment
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-secondary mr-2" />
                    Hair Wash & Style
                  </li>
                </ul>
                <a 
                  href="https://wa.me/447424665026?text=Hello! I'd like to book The Complete Gentleman package at Jeff Barbers & Dreadlocks LTD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="hero" className="w-full">
                    Book Package
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-luxury transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Dreadlock Care Package</CardTitle>
                <div className="text-3xl font-bold text-secondary">£120</div>
                <CardDescription>Complete dreadlock maintenance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-secondary mr-2" />
                    Root Tightening
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-secondary mr-2" />
                    Deep Conditioning
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-secondary mr-2" />
                    Loc Styling
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-secondary mr-2" />
                    Scalp Treatment
                  </li>
                </ul>
                <a 
                  href="https://wa.me/447424665026?text=Hello! I'd like to book the Dreadlock Care Package at Jeff Barbers & Dreadlocks LTD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="premium" className="w-full">
                    Book Package
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-luxury transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Family Package</CardTitle>
                <div className="text-3xl font-bold text-secondary">£85</div>
                <CardDescription>Perfect for families with children</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-secondary mr-2" />
                    2 Adult Haircuts
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-secondary mr-2" />
                    2 Kids Haircuts
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-secondary mr-2" />
                    Hair Wash for All
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-secondary mr-2" />
                    Family Photo
                  </li>
                </ul>
                <a 
                  href="https://wa.me/447424665026?text=Hello! I'd like to book the Family Package at Jeff Barbers & Dreadlocks LTD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="accent" className="w-full">
                    Book Package
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Look?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference professional care makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/447424665026?text=Hello! I'd like to book an appointment at Jeff Barbers & Dreadlocks LTD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="text-lg px-8">
                Book Online Now
              </Button>
            </a>
            <a 
              href="https://wa.me/447535098633?text=Hello! I'd like to speak about booking at Jeff Barbers & Dreadlocks LTD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                WhatsApp: +44 7535 098633
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;