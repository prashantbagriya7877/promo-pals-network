
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Users, TagIcon, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-12 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fadeIn">
                <h2 className="text-3xl font-bold">
                  Grow Your Business Through Local Partnerships
                </h2>
                <p className="text-lg text-gray-600">
                  Join WowPromo and be part of a network that helps local businesses
                  thrive together through mutual promotion and customer rewards.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <Building2 className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-semibold mb-1">For Businesses</h3>
                    <p className="text-sm text-gray-600">
                      Create unique promotions and attract new customers
                    </p>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <Users className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-semibold mb-1">For Customers</h3>
                    <p className="text-sm text-gray-600">
                      Get exclusive discounts at local businesses
                    </p>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <TagIcon className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-semibold mb-1">Create Promos</h3>
                    <p className="text-sm text-gray-600">
                      Generate unique coupon codes for your customers
                    </p>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <TrendingUp className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-semibold mb-1">Track Growth</h3>
                    <p className="text-sm text-gray-600">
                      Monitor promotion performance and customer engagement
                    </p>
                  </Card>
                </div>
                
                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link to="/signup">
                      Sign Up Now
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/about">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex justify-center animate-slideUp">
                <div className="w-full max-w-md">
                  <Card className="p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                    <ol className="space-y-6">
                      <li className="flex">
                        <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                        <div>
                          <h4 className="font-medium">Register Your Business</h4>
                          <p className="text-gray-600">Create an account and set up your business profile.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                        <div>
                          <h4 className="font-medium">Create Promotions</h4>
                          <p className="text-gray-600">Design special offers for your customers.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                        <div>
                          <h4 className="font-medium">Grow Together</h4>
                          <p className="text-gray-600">Customers redeem offers and businesses support each other.</p>
                        </div>
                      </li>
                    </ol>
                    <div className="mt-6">
                      <Button asChild className="w-full">
                        <Link to="/business-profile">
                          Get Started
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
