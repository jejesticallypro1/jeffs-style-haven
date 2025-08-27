import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Tag } from "lucide-react";
import blogTools from "@/assets/blog-tools.jpg";
import blogDreadlockCare from "@/assets/blog-dreadlock-care.jpg";
import galleryMensFade from "@/assets/gallery-mens-fade.jpg";
import galleryWomensDreads from "@/assets/gallery-womens-dreads.jpg";
import galleryKidsCut from "@/assets/gallery-kids-cut.jpg";
import galleryBeardTrim from "@/assets/gallery-beard-trim.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Dreadlock Maintenance: Professional Tips for Healthy Locs",
    excerpt: "Discover the secrets to maintaining beautiful, healthy dreadlocks with professional techniques used by expert stylists. Learn about proper washing, conditioning, and styling methods.",
    content: `Dreadlocks are more than just a hairstyle - they're a journey of natural hair expression that requires proper care and maintenance. At Jeff Barbers & Dreadlocks LTD, we've perfected the art of dreadlock care through years of experience and dedication to natural hair health.

**The Foundation of Healthy Dreadlocks**

Proper dreadlock maintenance begins with understanding your hair type and texture. Natural African hair has unique characteristics that make it perfect for dreadlock formation, but it also requires specific care routines to maintain health and appearance.

**Weekly Maintenance Routine:**
- Gentle washing with residue-free shampoo
- Root massage to promote healthy growth
- Palm rolling to maintain shape and form
- Proper drying techniques to prevent mold and odor

**Monthly Professional Care:**
- Deep cleansing treatments
- Root tightening and maintenance
- Scalp health assessment
- Styling and shaping services

**Common Mistakes to Avoid:**
1. Over-washing or under-washing
2. Using products with heavy residues
3. Ignoring scalp health
4. Attempting DIY maintenance without proper knowledge

**Why Choose Professional Dreadlock Services?**

Professional dreadlock maintenance ensures your locs remain healthy, clean, and beautifully styled. Our expert stylists understand the nuances of different hair textures and can provide personalized care plans for optimal results.

At Jeff Barbers & Dreadlocks LTD, we use only the finest natural products and proven techniques to maintain your dreadlocks. Whether you're starting your loc journey or maintaining mature dreadlocks, our team provides the expertise you need for beautiful, healthy hair.`,
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Dreadlock Care",
    readTime: "8 min read",
    image: blogDreadlockCare,
    tags: ["Dreadlocks", "Hair Care", "Natural Hair", "Maintenance", "Professional Tips"]
  },
  {
    id: 2,
    title: "Modern Men's Barbering: Trends, Techniques, and Professional Grooming Standards",
    excerpt: "Explore the evolution of men's barbering from classic cuts to contemporary styles. Learn about the latest trends, professional techniques, and grooming standards that define modern masculinity.",
    content: `The art of men's barbering has evolved significantly over the past decade, blending traditional techniques with modern styling innovations. At Jeff Barbers & Dreadlocks LTD, we stay at the forefront of these developments to provide our clients with the best in contemporary grooming.

**Current Trends in Men's Barbering:**

1. **The Modern Fade**: A sophisticated blend that transitions seamlessly from short to long hair, requiring precision and skill to execute properly.

2. **Textured Cuts**: Moving away from overly structured styles, modern men prefer natural texture and movement in their hair.

3. **Beard Integration**: Coordinating facial hair with haircuts for a cohesive, polished look.

4. **Low Maintenance Styles**: Busy lifestyles demand cuts that look great with minimal daily styling.

**Professional Techniques That Make the Difference:**

- **Precision Clipper Work**: Using various guard sizes and blending techniques for seamless fades
- **Scissor Over Comb**: Creating natural texture and removing weight
- **Point Cutting**: Adding texture and movement to the hair ends
- **Razor Work**: For ultra-clean lines and precise edge work

**The Importance of Professional Consultation:**

Every client's hair is unique, and professional barbers understand how to work with different hair types, face shapes, and lifestyle requirements. A proper consultation ensures you receive a cut that enhances your natural features and fits your daily routine.

**Grooming Beyond the Cut:**

Modern barbering includes comprehensive grooming services:
- Scalp treatments and massage
- Beard trimming and shaping
- Eyebrow grooming
- Hot towel treatments
- Premium product application

**Why Professional Matters:**

While DIY cuts might seem convenient, professional barbering ensures precision, hygiene, and results that truly enhance your appearance. Our skilled barbers have years of experience and ongoing training in the latest techniques and trends.

Visit Jeff Barbers & Dreadlocks LTD to experience the difference professional barbering makes. We combine traditional craftsmanship with modern innovations to deliver exceptional results for every client.`,
    author: "Marcus Williams",
    date: "2024-01-12",
    category: "Men's Grooming",
    readTime: "10 min read",
    image: galleryMensFade,
    tags: ["Men's Cuts", "Barbering", "Grooming", "Trends", "Professional Services"]
  },
  {
    id: 3,
    title: "Essential Barbering Tools: A Professional's Guide to Quality Equipment",
    excerpt: "Discover the professional-grade tools and equipment that make the difference in quality barbering. Learn about the importance of proper tools for achieving perfect cuts and styles.",
    content: `The quality of barbering tools directly impacts the quality of the haircut. At Jeff Barbers & Dreadlocks LTD, we invest in the finest professional equipment to ensure every client receives exceptional service and results.

**Essential Clipper Selection:**

Professional clippers are the foundation of modern barbering. We use:
- **Wahl Professional Series**: Known for durability and precision
- **Andis Master Clippers**: Excellent for detailed work and blending
- **Oster Fast Feed**: Perfect for bulk hair removal and initial shaping

**Scissor Craftsmanship:**

Quality scissors are an investment in precision:
- **Japanese Steel Scissors**: Offer superior sharpness and longevity
- **Texturizing Shears**: Create natural movement and reduce bulk
- **Thinning Scissors**: Blend layers seamlessly

**Specialized Tools for Expert Results:**

1. **Straight Razors**: For the cleanest lines and traditional shaving experiences
2. **Trimmer Precision**: Detail work around ears, necklines, and design elements
3. **Combs and Brushes**: Various sizes and materials for different techniques
4. **Cape and Neck Strips**: Hygiene and comfort essentials

**Maintenance and Hygiene Standards:**

Professional barbering requires meticulous tool maintenance:
- Daily cleaning and disinfection
- Regular blade sharpening and replacement
- Proper storage and organization
- Following health department guidelines

**The Technology Advantage:**

Modern barbering incorporates technological advances:
- Cordless clipper systems for freedom of movement
- Adjustable blade systems for versatile cutting
- Ergonomic designs to reduce hand fatigue
- Battery technology for consistent power

**Investment in Quality:**

Professional-grade tools may cost more initially, but they provide:
- Consistent performance
- Longer lifespan
- Better results
- Enhanced client satisfaction

**Why Tool Quality Matters to You:**

As a client, the quality of tools used in your service affects:
- Precision of your cut
- Comfort during the service
- Longevity of your style
- Overall satisfaction with results

At Jeff Barbers & Dreadlocks LTD, we use only the finest professional tools and maintain them to the highest standards. This commitment to quality equipment ensures every client receives the exceptional service they deserve.`,
    author: "Jeff Thompson",
    date: "2024-01-10",
    category: "Professional Insights",
    readTime: "7 min read",
    image: blogTools,
    tags: ["Tools", "Equipment", "Professional", "Quality", "Barbering"]
  },
  {
    id: 4,
    title: "Kids' Haircuts: Creating Positive Experiences for Young Clients",
    excerpt: "Learn how professional barbers create comfortable, fun experiences for children while delivering quality haircuts. Tips for parents and insights into child-friendly barbering techniques.",
    content: `Cutting children's hair requires a special blend of technical skill, patience, and understanding. At Jeff Barbers & Dreadlocks LTD, we've developed specialized approaches to ensure every young client has a positive, comfortable experience.

**Understanding Children's Needs:**

Children have unique requirements that differ from adult clients:
- Shorter attention spans requiring efficient service
- Sensitivity to new environments and experiences
- Need for gentle, reassuring communication
- Different hair textures and growth patterns

**Creating a Child-Friendly Environment:**

Our approach includes:
- **Welcoming Atmosphere**: Bright, friendly spaces that feel inviting
- **Entertainment Options**: Age-appropriate distractions during the cut
- **Comfortable Seating**: Child-sized chairs and booster seats
- **Patient Staff**: Barbers trained in working with children

**Technical Considerations for Kids' Cuts:**

1. **Safety First**: Using appropriate tools and techniques for active children
2. **Quick Efficiency**: Streamlined processes to minimize chair time
3. **Age-Appropriate Styles**: Cuts that work with children's lifestyles
4. **Growth Patterns**: Understanding how children's hair grows differently

**Popular Kids' Styles:**

- **Classic Short Cuts**: Easy to maintain and school-appropriate
- **Textured Styles**: Natural-looking cuts that grow out well
- **Fun Designs**: Creative elements that express personality
- **Low Maintenance**: Styles that busy parents can easily manage

**Tips for Parents:**

**Before the Visit:**
- Schedule appointments during your child's best times of day
- Bring comfort items if needed
- Discuss the experience positively beforehand
- Consider bringing photos of desired styles

**During the Service:**
- Stay calm and positive
- Trust the professional's expertise
- Engage with your child to keep them comfortable
- Be patient with the process

**Building Positive Associations:**

We focus on making each visit enjoyable so children develop positive associations with professional grooming. This sets the foundation for a lifetime of good grooming habits and self-care.

**Special Considerations:**

- **First Haircuts**: Extra patience and gentle approaches
- **Sensory Sensitivities**: Accommodating children with special needs
- **Anxiety Management**: Techniques to help nervous children relax
- **Family Involvement**: Including siblings or parents when helpful

**The Long-Term Benefits:**

Regular professional haircuts for children provide:
- Healthy hair growth and maintenance
- Development of grooming awareness
- Positive self-image and confidence
- Establishment of self-care routines

At Jeff Barbers & Dreadlocks LTD, we understand that a child's haircut experience can shape their relationship with personal grooming for years to come. Our skilled, patient staff ensures every young client leaves feeling confident and happy with their new look.`,
    author: "Lisa Rodriguez",
    date: "2024-01-08",
    category: "Kids' Grooming",
    readTime: "6 min read",
    image: galleryKidsCut,
    tags: ["Kids Cuts", "Children", "Family", "Positive Experience", "Professional Care"]
  },
  {
    id: 5,
    title: "The Art of Beard Grooming: Professional Techniques for Perfect Facial Hair",
    excerpt: "Master the art of beard grooming with professional techniques and expert advice. Learn about trimming, shaping, and maintaining healthy facial hair for a distinguished look.",
    content: `Beard grooming is an art form that requires skill, precision, and understanding of facial hair growth patterns. At Jeff Barbers & Dreadlocks LTD, our expert barbers specialize in creating and maintaining distinguished beard styles that enhance masculine features.

**Understanding Beard Growth:**

Facial hair grows in unique patterns for each individual:
- **Growth Direction**: Hair may grow in multiple directions
- **Density Variations**: Some areas may be thicker than others
- **Texture Differences**: Coarse vs. fine hair requires different approaches
- **Growth Rate**: Varies by genetics and health factors

**Professional Beard Trimming Techniques:**

1. **Assessment and Consultation**: Understanding client goals and face shape
2. **Preparation**: Proper cleaning and combing before cutting
3. **Outline Creation**: Establishing clean lines and boundaries
4. **Length Adjustment**: Using various tools for desired length
5. **Detail Work**: Precision trimming around sensitive areas
6. **Finishing**: Final touches and styling

**Essential Beard Styles:**

**The Full Beard:**
- Classic, distinguished look
- Requires regular maintenance
- Suits most face shapes
- Professional yet masculine

**The Goatee:**
- Focused facial hair style
- Modern and versatile
- Easy to maintain
- Suits various lifestyles

**The Stubble:**
- Controlled short growth
- Casual yet refined
- Low maintenance
- Popular contemporary choice

**Beard Care Between Visits:**

Daily maintenance ensures optimal beard health:
- **Washing**: Gentle cleansing with beard-specific products
- **Conditioning**: Keeping hair soft and manageable
- **Brushing**: Distributing natural oils and training growth
- **Oil Application**: Moisturizing skin and hair

**Professional vs. DIY Grooming:**

While basic maintenance can be done at home, professional grooming provides:
- **Precision Shaping**: Expert eye for symmetry and proportion
- **Proper Tools**: Professional-grade equipment for best results
- **Experience**: Knowledge of different hair types and growth patterns
- **Hygiene Standards**: Proper sanitation and safety protocols

**Common Beard Grooming Mistakes:**

1. **Over-trimming**: Removing too much length too quickly
2. **Ignoring Neckline**: Improper neckline definition
3. **Uneven Shaping**: Lack of symmetry in trimming
4. **Wrong Products**: Using inappropriate grooming products
5. **Neglecting Skin**: Forgetting to care for underlying skin

**The Health Benefits:**

Proper beard grooming promotes:
- Healthy skin underneath
- Reduced ingrown hairs
- Better hygiene
- Enhanced appearance
- Increased confidence

**Choosing the Right Style:**

Professional consultation considers:
- Face shape and features
- Lifestyle and profession
- Hair growth patterns
- Personal preferences
- Maintenance commitment

At Jeff Barbers & Dreadlocks LTD, we take pride in our beard grooming expertise. Our skilled barbers understand the nuances of facial hair and work with each client to achieve their ideal look while maintaining the health and integrity of their beard.`,
    author: "Michael Brown",
    date: "2024-01-05",
    category: "Beard Care",
    readTime: "9 min read",
    image: galleryBeardTrim,
    tags: ["Beard Care", "Facial Hair", "Grooming", "Men's Style", "Professional Services"]
  },
  {
    id: 6,
    title: "Women's Natural Hair Care: Embracing Texture and Celebrating Beauty",
    excerpt: "Discover professional techniques for caring for natural African hair textures. Learn about protective styling, moisture retention, and celebrating the beauty of natural hair.",
    content: `Natural hair care is a journey of understanding, patience, and celebration of African hair textures. At Jeff Barbers & Dreadlocks LTD, we specialize in enhancing the natural beauty of textured hair while promoting healthy growth and maintenance.

**Understanding Natural Hair Textures:**

African hair comes in diverse textures, each requiring specific care:
- **Type 3 (Curly)**: Loose to tight curls with varying porosity
- **Type 4A (Coily)**: Soft coils with visible curl pattern
- **Type 4B (Coily)**: Z-pattern with less defined curls
- **Type 4C (Kinky)**: Tight coils with fragile structure

**Professional Natural Hair Services:**

**Protective Styling:**
- Braids and twists that protect hair ends
- Low-manipulation styles for growth retention
- Temporary protective options for versatility
- Long-term protective styles for convenience

**Deep Conditioning Treatments:**
- Protein treatments for strength
- Moisture treatments for hydration
- Hot oil treatments for scalp health
- Custom treatments based on hair needs

**Natural Hair Cutting and Shaping:**
- Trimming for healthy ends
- Shaping for desired silhouette
- Layering for movement and volume
- Precision cutting for natural styles

**The Importance of Moisture:**

Natural hair requires consistent moisture due to its structure:
- **Sebum Distribution**: Natural oils don't travel down curved hair shafts easily
- **Porosity Factors**: Hair's ability to absorb and retain moisture
- **Environmental Damage**: Protecting against harsh elements
- **Chemical Damage**: Avoiding over-processing and damage

**Professional Product Selection:**

We use products specifically formulated for natural hair:
- **Sulfate-Free Shampoos**: Gentle cleansing without stripping
- **Rich Conditioners**: Deep moisturizing and strengthening
- **Leave-In Treatments**: Ongoing protection and nourishment
- **Natural Oils**: Sealing moisture and adding shine

**Styling Techniques for Natural Hair:**

**Wash and Go:**
- Enhancing natural curl pattern
- Minimal manipulation styling
- Defining curls with proper products
- Quick and efficient daily option

**Twist-Outs and Braid-Outs:**
- Creating definition and volume
- Stretching hair for length appearance
- Protecting hair while creating style
- Versatile and long-lasting options

**Updos and Protective Styles:**
- Elegant options for special occasions
- Protecting ends and fragile areas
- Professional and sophisticated looks
- Low-maintenance daily options

**Common Natural Hair Myths Debunked:**

1. **"Natural hair doesn't grow"**: All hair grows; retention is key
2. **"Natural hair is unprofessional"**: Proper styling creates polished looks
3. **"Natural hair requires too much work"**: Right techniques simplify care
4. **"All natural hair is the same"**: Each texture requires specific approaches

**Building a Healthy Hair Routine:**

**Weekly Care:**
- Gentle cleansing with appropriate products
- Deep conditioning treatments
- Protective styling for sleep
- Scalp massage for circulation

**Monthly Professional Care:**
- Trim for healthy ends
- Deep treatments for intensive care
- Professional styling consultation
- Product recommendation updates

**The Natural Hair Journey:**

Embracing natural hair is a personal journey that includes:
- Learning your hair's unique needs
- Developing confidence in natural texture
- Finding styles that express personality
- Building healthy hair habits

At Jeff Barbers & Dreadlocks LTD, we celebrate the beauty of natural hair and provide the expertise needed to maintain healthy, beautiful textured hair. Our stylists understand the unique requirements of natural hair and work with each client to develop personalized care routines that promote growth, health, and beauty.`,
    author: "Keisha Adams",
    date: "2024-01-03",
    category: "Natural Hair Care",
    readTime: "11 min read",
    image: galleryWomensDreads,
    tags: ["Natural Hair", "Women's Care", "Protective Styling", "Hair Health", "Texture Care"]
  }
];

const categories = ["All", "Dreadlock Care", "Men's Grooming", "Professional Insights", "Kids' Grooming", "Beard Care", "Natural Hair Care"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-hero overflow-hidden min-h-[700px]">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Hair Care Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Expert tips, professional techniques, and industry insights from Jeff Barbers & Dreadlocks LTD. 
              Stay informed about the latest trends in barbering, dreadlock care, and natural hair maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Subscribe to Newsletter
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
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

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary" className="text-primary">
                      Featured
                    </Badge>
                    <Badge variant="outline">
                      {blogPosts[0].category}
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <Button variant="accent" className="w-fit">
                    Read Full Article
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-300 group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-accent text-white shadow-luxury">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Stay Updated with Hair Care Tips</h3>
                <p className="mb-6 text-white/90">
                  Subscribe to our newsletter for the latest professional hair care insights, 
                  styling tips, and exclusive offers from Jeff Barbers & Dreadlocks LTD.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg text-primary bg-white/90 placeholder:text-muted-foreground"
                  />
                  <Button variant="hero" className="bg-white text-primary hover:bg-white/90">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;