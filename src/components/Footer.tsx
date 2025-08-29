import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scissors, Facebook, Instagram, MessageCircle, Clock, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">JEFF BARBERS & DREADLOCKS LTD</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Premier unisex barbershop providing exceptional grooming services for men, women, 
              boys, and girls. Expert cuts, dreadlock styling, and professional treatments.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </Button>
              <a 
                href="https://wa.me/447424665026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="ghost" size="icon" className="text-white hover:text-secondary">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-secondary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4 text-secondary" />
                <div>
                  <div>+447535098633 (WhatsApp & Call)</div>
                  <div>+447424665026 (WhatsApp only)</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>169 Old Kent Rd, London SE1 5NA, United Kingdom</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="h-4 w-4 text-secondary" />
                <div>
                  <div>Mon-Fri: 9AM-7PM</div>
                  <div>Sat-Sun: 10AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 JEFF BARBERS & DREADLOCKS LTD. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="https://wa.me/447424665026"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">WhatsApp: +44 7424 665026</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-secondary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-secondary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/447424665026?text=Hello! I'd like to book an appointment at Jeff Barbers & Dreadlocks LTD"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button 
            variant="accent" 
            size="icon" 
            className="w-14 h-14 rounded-full shadow-luxury hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;