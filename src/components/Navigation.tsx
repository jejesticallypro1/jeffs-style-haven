import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-circle.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary shadow-lg">
                <img 
                  src={logo} 
                  alt="Jeff Barbers & Dreadlocks LTD Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xl font-bold text-primary">
                JEFF BARBERS & DREADLOCKS LTD
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-foreground hover:text-secondary transition-colors font-medium ${
                  location.pathname === item.path ? "text-secondary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/447424665026?text=Hello! I'd like to book an appointment at Jeff Barbers & Dreadlocks LTD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" className="ml-4">
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 text-foreground hover:text-secondary transition-colors font-medium ${
                    location.pathname === item.path ? "text-secondary" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <a 
                  href="https://wa.me/447424665026?text=Hello! I'd like to book an appointment at Jeff Barbers & Dreadlocks LTD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="hero" className="w-full">
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;