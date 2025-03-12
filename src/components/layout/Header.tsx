
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, User, Menu, X, Tag } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be replaced with actual auth state
  const [couponCount, setCouponCount] = useState(3); // This would be fetched from API
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCouponClick = () => {
    if (isLoggedIn) {
      navigate("/customer-profile?tab=coupons");
    } else {
      toast({
        title: "Login Required",
        description: "Please log in to view your coupons",
        variant: "destructive",
      });
      navigate("/login");
    }
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
            <Link to="/coupons" className="text-gray-700 hover:text-primary transition-colors">
              Marketplace
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              About Us
            </Link>
            <div className="relative cursor-pointer" onClick={handleCouponClick}>
              <Tag className="h-5 w-5 text-primary" />
              {couponCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                  {couponCount}
                </Badge>
              )}
            </div>
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
              to="/coupons"
              className="block px-2 py-1 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              to="/about"
              className="block px-2 py-1 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div 
              className="flex items-center px-2 py-1 text-gray-700 hover:text-primary transition-colors"
              onClick={() => {
                setIsMenuOpen(false);
                handleCouponClick();
              }}
            >
              <Tag className="h-4 w-4 mr-2" />
              <span>My Coupons</span>
              {couponCount > 0 && (
                <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                  {couponCount}
                </Badge>
              )}
            </div>
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
