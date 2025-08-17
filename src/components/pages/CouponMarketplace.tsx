import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Percent, MapPin, Search, Building2, Tag, Filter } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CouponCard from "@/components/coupons/CouponCard";
import CouponFilters from "@/components/coupons/CouponFilters";
import { mockCouponsData } from "@/data/mockCouponsData";
import { Coupon } from "@/types/coupon";

const CouponMarketplace = () => {
  const [coupons, setCoupons] = useState<Coupon[]>(mockCouponsData);
  const [filteredCoupons, setFilteredCoupons] = useState<Coupon[]>(mockCouponsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [minDiscount, setMinDiscount] = useState(0);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter coupons based on search, category, discount, and location
  useEffect(() => {
    let results = coupons;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        coupon => 
          coupon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coupon.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coupon.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coupon.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter(coupon => coupon.category === selectedCategory);
    }
    
    // Filter by discount
    results = results.filter(coupon => {
      const discountValue = parseInt(coupon.discount.replace(/%|\$/g, ""));
      return discountValue >= minDiscount;
    });
    
    // Filter by location
    if (selectedLocations.length > 0) {
      results = results.filter(coupon => 
        selectedLocations.includes(coupon.location)
      );
    }
    
    setFilteredCoupons(results);
  }, [coupons, searchTerm, selectedCategory, minDiscount, selectedLocations]);
  
  // Extract unique categories and locations for filters
  const categories = ["all", ...Array.from(new Set(coupons.map(coupon => coupon.category)))];
  const locations = Array.from(new Set(coupons.map(coupon => coupon.location)));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-primary/5 to-blue-50/30">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center animate-fadeIn">
            <div className="bg-gradient-to-r from-primary to-blue-600 p-3 rounded-xl mr-4 shadow-lg">
              <Tag className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gradient">Coupon Marketplace</h1>
              <p className="text-muted-foreground mt-1">Discover amazing deals from local businesses</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            className="md:hidden hover:bg-primary/10 transition-colors duration-300" 
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters - Desktop */}
          <div className="hidden md:block md:w-1/4">
            <CouponFilters 
              categories={categories}
              locations={locations}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              minDiscount={minDiscount}
              setMinDiscount={setMinDiscount}
              selectedLocations={selectedLocations}
              setSelectedLocations={setSelectedLocations}
            />
          </div>
          
          {/* Filters - Mobile (Collapsible) */}
          {showFilters && (
            <div className="md:hidden w-full mb-4">
              <CouponFilters 
                categories={categories}
                locations={locations}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                minDiscount={minDiscount}
                setMinDiscount={setMinDiscount}
                selectedLocations={selectedLocations}
                setSelectedLocations={setSelectedLocations}
              />
            </div>
          )}
          
          {/* Main content */}
          <div className="md:w-3/4">
            {/* Search bar */}
            <div className="relative mb-8 animate-slideUp">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground z-10" />
              <Input
                type="text"
                placeholder="Search coupons, businesses, or categories..."
                className="pl-12 h-12 text-lg bg-white/80 backdrop-blur-sm border-primary/20 focus:border-primary/40 transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Coupons grid */}
            {filteredCoupons.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCoupons.map((coupon, index) => (
                  <div key={coupon.id} className={`animate-fadeIn`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <CouponCard coupon={coupon} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 animate-fadeIn">
                <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-r from-primary/10 to-blue-100 mb-6">
                  <Tag className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">No coupons found</h3>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CouponMarketplace;
