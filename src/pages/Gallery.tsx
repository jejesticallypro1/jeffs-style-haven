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
  }
];

const categories = ["All", "Men's Cuts", "Dreadlocks", "Kids Cuts", "Beard Care", "Hair Care", "Hair Color", "Transformations"];

const Gallery = () => {
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
              <Button variant="hero" size="lg" className="text-lg px-8">
                Book Your Appointment
              </Button>
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
                variant="outline"
                className="hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
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
            <Button variant="accent" size="lg" className="text-lg px-8">
              Schedule Your Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;