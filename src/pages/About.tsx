import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Users, Heart, Award, Clock, Star } from "lucide-react";
import barberJeff from "@/assets/barber-jeff.jpg";
import stylistSarah from "@/assets/stylist-sarah.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-hero text-white overflow-hidden min-h-[600px]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">About JEFF BARBERS & DREADLOCKS LTD</h1>
            <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed">
              We're more than just a barbershop - we're a community dedicated to bringing out the best in every client who walks through our doors.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2015, JEFF BARBERS & DREADLOCKS LTD started with a simple vision: to create a welcoming space where everyone - men, women, boys, and girls - could receive exceptional grooming services tailored to their unique style.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What began as a small neighborhood barbershop has grown into a premier destination for professional cuts, intricate dreadlock styling, and specialized treatments. Our commitment to excellence and personal attention has made us a trusted name in the community.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we continue to blend traditional barbering techniques with modern styling innovations, ensuring every client leaves feeling confident and looking their absolute best.
              </p>
              <Button variant="hero" size="lg" className="text-lg px-8">
                Book Your Appointment
              </Button>
            </div>
            <div className="relative">
              <img
                src={teamPhoto}
                alt="JEFF BARBERS team"
                className="rounded-2xl shadow-luxury w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at JEFF BARBERS & DREADLOCKS LTD
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Scissors className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We strive for perfection in every cut, style, and service we provide
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Inclusivity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our doors are open to everyone, regardless of age, gender, or style preference
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We believe in building lasting relationships with our clients and community
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-success/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Award className="h-8 w-8 text-success" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We stay current with the latest trends and techniques in hair styling
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our skilled professionals bring years of experience and passion to every service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src={barberJeff}
                    alt="Jeff Williams - Master Barber"
                    className="w-32 h-32 rounded-full object-cover shadow-soft"
                  />
                </div>
                <CardTitle className="text-xl">Jeff Williams</CardTitle>
                <CardDescription className="text-secondary font-semibold">Master Barber & Owner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  With over 15 years of experience, Jeff specializes in precision cuts, fades, and beard styling. His passion for the craft drives our commitment to excellence.
                </p>
                <div className="flex justify-center items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src={stylistSarah}
                    alt="Sarah Johnson - Dreadlock Specialist"
                    className="w-32 h-32 rounded-full object-cover shadow-soft"
                  />
                </div>
                <CardTitle className="text-xl">Sarah Johnson</CardTitle>
                <CardDescription className="text-secondary font-semibold">Dreadlock Specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Sarah is our resident dreadlock expert with 12 years of experience in loc maintenance, styling, and treatments. She's passionate about healthy hair care.
                </p>
                <div className="flex justify-center items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="w-32 h-32 rounded-full bg-gradient-gold flex items-center justify-center shadow-soft">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">Our Team</CardTitle>
                <CardDescription className="text-secondary font-semibold">Expert Stylists</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our diverse team of skilled barbers and stylists brings together decades of combined experience to serve our community with dedication and expertise.
                </p>
                <div className="flex justify-center items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose JEFF BARBERS & DREADLOCKS LTD?</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We're committed to providing an exceptional experience that goes beyond just a haircut
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <Clock className="h-12 w-12 text-secondary mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">Flexible Hours</h3>
              <p className="text-gray-200">
                Open 7 days a week with convenient hours to fit your busy schedule
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Award className="h-12 w-12 text-secondary mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">Award-Winning Service</h3>
              <p className="text-gray-200">
                Recognized by the community for our outstanding service and expertise
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Heart className="h-12 w-12 text-secondary mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">Family-Friendly</h3>
              <p className="text-gray-200">
                A welcoming environment where the whole family can feel comfortable
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;