
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm py-4 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">WowPromo</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/business-profile" className="text-gray-700 hover:text-primary transition-colors">
              Business
            </Link>
            <Link to="/customer-profile" className="text-gray-700 hover:text-primary transition-colors">
              Customer
            </Link>
            <div className="flex space-x-2">
              <Button asChild variant="outline" size="sm">
                <Link to="/login">
                  <User className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/signup">
                  <Building2 className="mr-2 h-4 w-4" />
                  Sign Up
                </Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-2 space-y-3">
            <Link
              to="/"
              className="block px-2 py-1 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-2 py-1 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/business-profile"
              className="block px-2 py-1 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Business
            </Link>
            <Link
              to="/customer-profile"
              className="block px-2 py-1 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Customer
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button asChild variant="outline" size="sm">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <User className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Building2 className="mr-2 h-4 w-4" />
                  Sign Up
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
