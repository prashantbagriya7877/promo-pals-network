
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, TagIcon, TrendingUp, Award, Zap, Globe } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-primary">About WowPromo</h1>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-600 mb-8">
              WowPromo is a platform dedicated to connecting local businesses and customers
              through a unique coupon exchange network that benefits everyone involved.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-8">
              Our mission is to empower local businesses to grow together by creating a
              network of mutual promotion and customer rewards. We believe that when local
              businesses support each other, entire communities thrive.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <Building2 className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <h3 className="text-lg font-medium">For Businesses</h3>
                    <p className="text-gray-600">
                      Businesses create promotions that customers can redeem at their
                      establishment. These promotions help drive new customer traffic
                      and increase sales.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <Users className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <h3 className="text-lg font-medium">For Customers</h3>
                    <p className="text-gray-600">
                      Customers benefit by receiving exclusive discounts at participating
                      businesses. The more they shop, the more they save.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">The Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="p-6">
                <CardContent className="p-0">
                  <TagIcon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">Customer Savings</h3>
                  <p className="text-gray-600">
                    Customers save money on purchases from a variety of local businesses.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <TrendingUp className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">Business Growth</h3>
                  <p className="text-gray-600">
                    Businesses see increased foot traffic and revenue from new customers.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <Globe className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">Community Impact</h3>
                  <p className="text-gray-600">
                    Local economies thrive when businesses support each other.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Community First</h3>
                  <p className="text-gray-600">
                    We believe strong local businesses create strong communities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Zap className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Innovation</h3>
                  <p className="text-gray-600">
                    We continually seek new ways to connect businesses and customers.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Join the Network</h2>
            <p>
              Whether you're a business looking to grow or a customer looking to save,
              WowPromo is the platform for you. Join our growing network of local businesses
              and customers today!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
