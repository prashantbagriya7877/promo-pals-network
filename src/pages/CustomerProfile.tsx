
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Tag, Building2, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ClaimedCoupon } from "@/types/coupon";

// Mock data
const mockCoupons: ClaimedCoupon[] = [
  {
    id: "1",
    code: "SUMMER25",
    title: "Summer Special",
    description: "25% off on all summer items",
    discount: "25%",
    category: "Seasonal",
    businessName: "Coffee Haven",
    businessId: "biz1",
    location: "Downtown",
    expiryDate: "2023-09-30",
    usageCount: 45,
    createdAt: "2023-06-01",
    status: "active",
    claimedAt: "2023-07-15",
  },
  {
    id: "2",
    code: "WELCOME10",
    title: "Welcome Discount",
    description: "10% off on your first purchase",
    discount: "10%",
    category: "General",
    businessName: "Books & Beyond",
    businessId: "biz2",
    location: "Uptown",
    expiryDate: "2023-12-31",
    usageCount: 78,
    createdAt: "2023-05-10",
    status: "used",
    claimedAt: "2023-06-20",
    usedAt: "2023-07-05",
  },
  {
    id: "3",
    code: "PIZZA20",
    title: "Pizza Special",
    description: "20% off on all pizzas",
    discount: "20%",
    category: "Food",
    businessName: "Luigi's Pizza",
    businessId: "biz3",
    location: "Midtown",
    expiryDate: "2023-10-15",
    usageCount: 32,
    createdAt: "2023-07-01",
    status: "expired",
    claimedAt: "2023-07-10",
  },
];

const CustomerProfile = () => {
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const [coupons, setCoupons] = useState<ClaimedCoupon[]>(mockCoupons);
  const [customerName, setCustomerName] = useState("John Doe");
  const [phone, setPhone] = useState("(123) 456-7890");
  const [email, setEmail] = useState("john.doe@example.com");
  const [address, setAddress] = useState("456 Oak Lane, Anytown, USA");
  
  const [isEditing, setIsEditing] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  
  // Check for tab parameter in URL
  const [activeTab, setActiveTab] = useState<string>("profile");
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    if (tabParam && (tabParam === "profile" || tabParam === "coupons")) {
      setActiveTab(tabParam);
    }
  }, [location]);

  // In a real app, this would be connected to your auth system
  const isLoggedIn = true;
  
  // Simulate a login check
  useEffect(() => {
    if (!isLoggedIn) {
      toast({
        title: "Authentication Required",
        description: "Please log in to view your profile",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [isLoggedIn, navigate, toast]);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your customer profile has been updated successfully.",
    });
    setIsEditing(false);
  };

  const handleClaimCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!couponCode) {
      toast({
        title: "Missing Information",
        description: "Please enter a coupon code.",
        variant: "destructive",
      });
      return;
    }
    
    // This would be replaced with an actual API call to validate the coupon
    if (couponCode === "NEWDISCOUNT") {
      const newCoupon: ClaimedCoupon = {
        id: Date.now().toString(),
        code: couponCode,
        title: "New Customer Discount",
        description: "15% off for new customers",
        discount: "15%",
        category: "General",
        businessName: "Sample Business",
        businessId: "biz4",
        location: "Downtown",
        expiryDate: "2023-12-31",
        usageCount: 0,
        createdAt: new Date().toISOString(),
        status: "active",
        claimedAt: new Date().toISOString(),
      };
      
      setCoupons([newCoupon, ...coupons]);
      setCouponCode("");
      
      toast({
        title: "Coupon Claimed",
        description: "The coupon has been added to your account.",
      });
    } else {
      toast({
        title: "Invalid Coupon",
        description: "The coupon code you entered is invalid or has expired.",
        variant: "destructive",
      });
    }
  };

  const handleUseCoupon = (couponId: string) => {
    // In a real app, this would call an API to validate and use the coupon
    setCoupons(coupons.map(coupon => 
      coupon.id === couponId 
        ? { ...coupon, status: 'used' as const, usedAt: new Date().toISOString() } 
        : coupon
    ));
    
    toast({
      title: "Coupon Used",
      description: "Your coupon has been marked as used.",
    });
  };

  if (!isLoggedIn) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <User className="h-8 w-8 text-primary mr-3" />
          <h1 className="text-3xl font-bold">Customer Profile</h1>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="coupons">My Coupons</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    {customerName}
                  </CardTitle>
                  <CardDescription>Customer Account</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-gray-500">{email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-gray-500">{phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-sm text-gray-500">{address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Personal Information</span>
                    {!isEditing && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setIsEditing(true)}
                      >
                        Edit Profile
                      </Button>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="customerName">Full Name</Label>
                          <Input 
                            id="customerName" 
                            value={customerName} 
                            onChange={(e) => setCustomerName(e.target.value)} 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input 
                            id="phone" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="address">Address</Label>
                          <Input 
                            id="address" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                          />
                        </div>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Save Changes</Button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-medium mb-1">Full Name</h3>
                          <p>{customerName}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">Email</h3>
                          <p>{email}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">Phone</h3>
                          <p>{phone}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-1">Address</h3>
                        <p>{address}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="coupons">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle>Claim Coupon</CardTitle>
                  <CardDescription>
                    Enter a coupon code to claim it
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleClaimCoupon} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="couponCode">Coupon Code</Label>
                      <Input
                        id="couponCode"
                        placeholder="Enter code (e.g., NEWDISCOUNT)"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Claim Coupon
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Try using the code "NEWDISCOUNT" for a demo
                    </p>
                  </form>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Tag className="h-5 w-5 mr-2" />
                    Your Coupons
                  </CardTitle>
                  <CardDescription>
                    Manage your claimed coupons
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {coupons.length === 0 ? (
                      <div className="text-center text-gray-500 py-8 flex flex-col items-center">
                        <AlertTriangle className="h-12 w-12 text-gray-300 mb-2" />
                        <p>You don't have any coupons yet.</p>
                        <Button 
                          variant="outline" 
                          className="mt-4"
                          onClick={() => navigate("/coupons")}
                        >
                          Browse Marketplace
                        </Button>
                      </div>
                    ) : (
                      coupons.map((coupon) => (
                        <div
                          key={coupon.id}
                          className={`border rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
                            coupon.status === "expired" ? "bg-gray-50" : ""
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center">
                              <Tag className={`h-4 w-4 mr-2 ${
                                coupon.status === "active" ? "text-primary" : 
                                coupon.status === "used" ? "text-gray-400" : "text-red-400"
                              }`} />
                              <span className="font-medium">{coupon.code}</span>
                            </div>
                            <p className="text-sm">{coupon.title}</p>
                            <div className="flex items-center">
                              <Building2 className="h-3 w-3 mr-1 text-gray-500" />
                              <p className="text-sm text-gray-500">{coupon.businessName}</p>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              {coupon.discount}
                            </div>
                            <div className="text-sm flex items-center">
                              <Clock className="h-3 w-3 mr-1 text-gray-500" />
                              <span className="text-gray-500">Expires: </span>
                              <span className="ml-1">{coupon.expiryDate}</span>
                            </div>
                            {coupon.status === "active" && (
                              <Button
                                size="sm"
                                className="whitespace-nowrap"
                                onClick={() => handleUseCoupon(coupon.id)}
                              >
                                Use Now
                              </Button>
                            )}
                            {coupon.status === "used" && (
                              <div className="flex items-center text-green-600 text-sm">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Used
                              </div>
                            )}
                            {coupon.status === "expired" && (
                              <div className="text-red-500 text-sm">
                                Expired
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerProfile;
