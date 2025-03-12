
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">WowPromo</h3>
            <p className="text-gray-600">
              Connect local businesses and customers through mutual promotions
              and exclusive discounts.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/business-profile" className="text-gray-600 hover:text-primary transition-colors">
                  Business Profile
                </Link>
              </li>
              <li>
                <Link to="/customer-profile" className="text-gray-600 hover:text-primary transition-colors">
                  Customer Profile
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Contact</h4>
            <p className="text-gray-600">
              Email: info@wowpromo.com
            </p>
            <p className="text-gray-600">
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600">
          <p>© {currentYear} WowPromo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
