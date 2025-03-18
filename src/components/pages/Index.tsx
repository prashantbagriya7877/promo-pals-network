
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Users, TagIcon, TrendingUp, Star, MessageCircle, ChevronRight, Check } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
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
                    <Link href="/signup">
                      Sign Up Now
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/about">
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
                        <Link href="/business-profile">
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

        {/* Benefits Section */}
        <div className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Why Choose WowPromo?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform offers unique advantages for both businesses and customers, creating a win-win ecosystem for local commerce.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                    <Check className="h-5 w-5" />
                  </span>
                  Increased Visibility
                </h3>
                <p className="text-gray-600">
                  Get your business in front of more local customers through our marketplace and cross-promotion system.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                    <Check className="h-5 w-5" />
                  </span>
                  Customer Insights
                </h3>
                <p className="text-gray-600">
                  Gain valuable data on coupon usage, customer preferences, and promotion effectiveness.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                    <Check className="h-5 w-5" />
                  </span>
                  Community Building
                </h3>
                <p className="text-gray-600">
                  Join a community of like-minded local entrepreneurs working together to strengthen the local economy.
                </p>
              </Card>
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/about" className="flex items-center">
                  Learn More About Our Features
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from businesses and customers who are already benefiting from WowPromo's network.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-3">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">Bakery Owner</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Since joining WowPromo, we've seen a 30% increase in new customers. The platform makes it easy to create and track promotions, and the cross-business referrals have been invaluable."
                </p>
              </Card>
              
              <Card className="p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-3">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-gray-500">Coffee Shop Owner</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The analytics dashboard helps me see which promotions work best. I've been able to adjust my strategy based on real data, and it's made a huge difference in our foot traffic."
                </p>
              </Card>
              
              <Card className="p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-3">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Jessica Martinez</h4>
                    <p className="text-sm text-gray-500">Loyal Customer</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
                <p className="text-gray-600 mb-4">
                  "I love discovering new local businesses through WowPromo. The app makes it easy to find deals near me, and I've saved a ton of money while supporting local businesses."
                </p>
              </Card>
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/coupons">
                  Browse Available Coupons
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join the WowPromo Network?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're a business looking to grow or a customer seeking great deals, WowPromo has something for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/signup">
                    Sign Up for Free
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/coupons">
                    Explore Coupons
                  </Link>
                </Button>
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
