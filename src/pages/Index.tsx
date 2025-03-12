
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AuthTabs from "@/components/auth/AuthTabs";
import { Building2, Users, TagIcon, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="py-6 px-4 mb-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-primary">WowPromo</h1>
          <p className="text-lg text-gray-600 mt-2">Local Business Growth Network</p>
        </div>
      </header>

      <main className="container mx-auto px-4">
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
          </div>

          <div className="flex justify-center animate-slideUp">
            <AuthTabs />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
