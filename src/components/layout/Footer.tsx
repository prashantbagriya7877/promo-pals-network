
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">WowPromo</h3>
            <p className="text-gray-600 text-sm mb-4">
              Connecting local businesses and customers through a unique coupon exchange network.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/coupons" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Coupons
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">For Businesses</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/signup" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Register Business
                </Link>
              </li>
              <li>
                <Link href="/business-profile" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Business Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} WowPromo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
