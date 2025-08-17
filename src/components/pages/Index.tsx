
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
        <div className="py-16 px-4 bg-gradient-to-br from-primary/5 via-blue-50/50 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fadeIn">
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold text-gradient leading-tight">
                    Grow Your Business Through Local Partnerships
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Join WowPromo and be part of a network that helps local businesses
                    thrive together through mutual promotion and customer rewards.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="p-6 hover-lift group hover:shadow-xl transition-all duration-300">
                    <Building2 className="h-10 w-10 text-primary mb-3 group-hover:animate-bounce-gentle" />
                    <h3 className="font-semibold mb-2 text-lg">For Businesses</h3>
                    <p className="text-muted-foreground">
                      Create unique promotions and attract new customers
                    </p>
                  </Card>
                  <Card className="p-6 hover-lift group hover:shadow-xl transition-all duration-300">
                    <Users className="h-10 w-10 text-primary mb-3 group-hover:animate-bounce-gentle" />
                    <h3 className="font-semibold mb-2 text-lg">For Customers</h3>
                    <p className="text-muted-foreground">
                      Get exclusive discounts at local businesses
                    </p>
                  </Card>
                  <Card className="p-6 hover-lift group hover:shadow-xl transition-all duration-300">
                    <TagIcon className="h-10 w-10 text-primary mb-3 group-hover:animate-bounce-gentle" />
                    <h3 className="font-semibold mb-2 text-lg">Create Promos</h3>
                    <p className="text-muted-foreground">
                      Generate unique coupon codes for your customers
                    </p>
                  </Card>
                  <Card className="p-6 hover-lift group hover:shadow-xl transition-all duration-300">
                    <TrendingUp className="h-10 w-10 text-primary mb-3 group-hover:animate-bounce-gentle" />
                    <h3 className="font-semibold mb-2 text-lg">Track Growth</h3>
                    <p className="text-muted-foreground">
                      Monitor promotion performance and customer engagement
                    </p>
                  </Card>
                </div>
                
                <div className="flex gap-4">
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link href="/signup">
                      Sign Up Now
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="hover:bg-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <Link href="/about">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex justify-center animate-slideUp">
                <div className="w-full max-w-md">
                  <Card className="p-8 shadow-xl glass-effect backdrop-blur-sm border-primary/10 animate-float">
                    <h3 className="text-2xl font-semibold mb-6 text-center">How It Works</h3>
                    <ol className="space-y-6">
                      <li className="flex items-start group">
                        <span className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-semibold group-hover:scale-110 transition-transform duration-300">1</span>
                        <div>
                          <h4 className="font-semibold text-lg">Register Your Business</h4>
                          <p className="text-muted-foreground">Create an account and set up your business profile.</p>
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <span className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-semibold group-hover:scale-110 transition-transform duration-300">2</span>
                        <div>
                          <h4 className="font-semibold text-lg">Create Promotions</h4>
                          <p className="text-muted-foreground">Design special offers for your customers.</p>
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <span className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-semibold group-hover:scale-110 transition-transform duration-300">3</span>
                        <div>
                          <h4 className="font-semibold text-lg">Grow Together</h4>
                          <p className="text-muted-foreground">Customers redeem offers and businesses support each other.</p>
                        </div>
                      </li>
                    </ol>
                    <div className="mt-8">
                      <Button asChild className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white shadow-lg">
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
              <Card className="p-8 hover-lift group border-l-4 border-l-primary/20 hover:border-l-primary transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-primary/10 to-blue-100 text-primary p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6" />
                  </span>
                  Increased Visibility
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get your business in front of more local customers through our marketplace and cross-promotion system.
                </p>
              </Card>
              
              <Card className="p-8 hover-lift group border-l-4 border-l-primary/20 hover:border-l-primary transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-primary/10 to-blue-100 text-primary p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6" />
                  </span>
                  Customer Insights
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gain valuable data on coupon usage, customer preferences, and promotion effectiveness.
                </p>
              </Card>
              
              <Card className="p-8 hover-lift group border-l-4 border-l-primary/20 hover:border-l-primary transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-primary/10 to-blue-100 text-primary p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6" />
                  </span>
                  Community Building
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
              <Card className="p-8 shadow-xl hover-lift border-0 bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-100 to-primary/10 rounded-full p-4 mr-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Bakery Owner</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "Since joining WowPromo, we've seen a 30% increase in new customers. The platform makes it easy to create and track promotions, and the cross-business referrals have been invaluable."
                </p>
              </Card>
              
              <Card className="p-8 shadow-xl hover-lift border-0 bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-100 to-primary/10 rounded-full p-4 mr-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">Coffee Shop Owner</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "The analytics dashboard helps me see which promotions work best. I've been able to adjust my strategy based on real data, and it's made a huge difference in our foot traffic."
                </p>
              </Card>
              
              <Card className="p-8 shadow-xl hover-lift border-0 bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-100 to-primary/10 rounded-full p-4 mr-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Jessica Martinez</h4>
                    <p className="text-sm text-muted-foreground">Loyal Customer</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
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
        <div className="py-20 px-4 bg-gradient-to-r from-primary/5 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-gradient">Ready to Join the WowPromo Network?</h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Whether you're a business looking to grow or a customer seeking great deals, WowPromo has something for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg">
                  <Link href="/signup">
                    Sign Up for Free
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:bg-primary/5 border-primary/30 hover:border-primary/60 transition-all duration-300 px-8 py-4 text-lg">
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
