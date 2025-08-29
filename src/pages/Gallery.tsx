import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import galleryMensFade from "@/assets/gallery-mens-fade.jpg";
import galleryWomensDreads from "@/assets/gallery-womens-dreads.jpg";
import galleryKidsCut from "@/assets/gallery-kids-cut.jpg";
import galleryBeardTrim from "@/assets/gallery-beard-trim.jpg";
import galleryHairWash from "@/assets/gallery-hair-wash.jpg";
import galleryHairColor from "@/assets/gallery-hair-color.jpg";
import galleryTransformation from "@/assets/gallery-transformation.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const galleryImages = [
  {
    id: 1,
    src: galleryMensFade,
    alt: "Professional men's fade haircut and styling",
    category: "Men's Cuts",
    description: "Expert fade techniques and precision cutting"
  },
  {
    id: 2,
    src: galleryWomensDreads,
    alt: "Professional dreadlock maintenance and styling",
    category: "Dreadlocks",
    description: "Natural dreadlock care and professional styling"
  },
  {
    id: 3,
    src: galleryKidsCut,
    alt: "Kids haircuts in family-friendly environment",
    category: "Kids Cuts",
    description: "Gentle, professional cuts for children"
  },
  {
    id: 4,
    src: galleryBeardTrim,
    alt: "Professional beard trimming and shaping",
    category: "Beard Care",
    description: "Expert beard grooming and styling services"
  },
  {
    id: 5,
    src: galleryHairWash,
    alt: "Relaxing hair washing and treatment service",
    category: "Hair Care",
    description: "Luxurious hair washing and conditioning treatments"
  },
  {
    id: 6,
    src: galleryHairColor,
    alt: "Professional hair coloring services",
    category: "Hair Color",
    description: "Expert hair coloring and highlights"
  },
  {
    id: 7,
    src: galleryTransformation,
    alt: "Before and after hair transformations",
    category: "Transformations",
    description: "Stunning hair transformation results"
  },
  {
    id: 8,
    src: galleryInterior,
    alt: "Modern unisex barbershop interior",
    category: "Our Space",
    description: "Clean, modern, and professional environment"
  },
  {
    id: 9,
    src: gallery1,
    alt: "Professional styling and grooming services",
    category: "Styling",
    description: "Complete styling and grooming solutions"
  },
  {
    id: 10,
    src: gallery2,
    alt: "Expert hair treatments and care",
    category: "Treatments",
    description: "Specialized hair treatments and care"
  },
  {
    id: 11,
    src: gallery3,
    alt: "Family grooming services for all ages",
    category: "Family",
    description: "Professional services for the whole family"
  },
  {
    id: 12,
    src: galleryMensFade,
    alt: "Precision cutting and styling techniques",
    category: "Precision Cuts",
    description: "Advanced cutting techniques and styling"
  },
  {
    id: 13,
    src: "/lovable-uploads/946a5280-73fa-4d40-9fe9-9511e1ec9fac.png",
    alt: "Professional dreadlock styling - Natural locs maintenance",
    category: "Dreadlocks",
    description: "Expert natural dreadlock maintenance and styling"
  },
  {
    id: 14,
    src: "/lovable-uploads/a84d410b-cedf-421d-83ab-afdb3c9a4988.png",
    alt: "Professional dreadlock styling - Creative loc designs",
    category: "Dreadlocks",
    description: "Creative dreadlock styling and patterns"
  },
  {
    id: 15,
    src: "/lovable-uploads/cf639c7b-7f0a-4ad4-9a0e-26be21eed008.png",
    alt: "Professional dreadlock styling - Modern loc cuts",
    category: "Dreadlocks",
    description: "Modern dreadlock cuts and styling techniques"
  },
  {
    id: 16,
    src: "/lovable-uploads/ad092d26-2b6c-497f-a156-aee5b60b816c.png",
    alt: "Professional dreadlock styling - Loc maintenance",
    category: "Dreadlocks",
    description: "Professional dreadlock maintenance and care"
  },
  {
    id: 17,
    src: "/lovable-uploads/22d303c2-0062-4a64-a4dc-19df5badc6d1.png",
    alt: "Professional dreadlock styling - Artistic loc designs",
    category: "Dreadlocks",
    description: "Artistic dreadlock styling and creative designs"
  },
  {
    id: 18,
    src: "/lovable-uploads/433c1adb-4c65-4455-b342-f1d219e593bd.png",
    alt: "Professional dreadlock styling - Traditional loc work",
    category: "Dreadlocks",
    description: "Traditional dreadlock styling and professional care"
  }
];

const categories = ["All", "Men's Cuts", "Dreadlocks", "Kids Cuts", "Beard Care", "Hair Care", "Hair Color", "Transformations"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = galleryImages.filter((image) => 
    selectedCategory === "All" || image.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Our Work Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Discover the artistry and expertise that sets Jeff Barbers & Dreadlocks LTD apart. 
              From precision cuts to stunning transformations, witness the quality of our professional services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/447535098633?text=Hello! I'd like to book an appointment at Jeff Barbers & Dreadlocks LTD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="hero" size="lg" className="text-lg px-8">
                  Book Your Appointment
                </Button>
              </a>
              <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="hover:bg-secondary hover:text-primary transition-all duration-300"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-luxury transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {image.category}
                    </span>
                    <p className="text-sm leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold mb-4">Ready for Your Transformation?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the same level of excellence showcased in our gallery. 
              Book your appointment today and join our satisfied clients.
            </p>
            <a 
              href="https://wa.me/447535098633?text=Hello! I'd like to book an appointment at Jeff Barbers & Dreadlocks LTD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="accent" size="lg" className="text-lg px-8">
                Schedule Your Visit
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;