import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    alt: "Professional men's fade and beard styling",
    category: "Men's Cuts"
  },
  {
    id: 2,
    src: gallery2,
    alt: "Beautiful dreadlock styling and maintenance",
    category: "Dreadlocks"
  },
  {
    id: 3,
    src: gallery3,
    alt: "Kids haircuts and styling",
    category: "Kids Cuts"
  },
  {
    id: 4,
    src: gallery1,
    alt: "Hair treatments and coloring",
    category: "Treatments"
  },
  {
    id: 5,
    src: gallery2,
    alt: "Women's styling services",
    category: "Women's Style"
  },
  {
    id: 6,
    src: gallery3,
    alt: "Family grooming services",
    category: "Family"
  }
];

const GalleryPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the transformations and stunning styles we create for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-luxury transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium bg-secondary text-primary px-2 py-1 rounded">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery">
            <Button variant="accent" size="lg" className="text-lg px-8">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;