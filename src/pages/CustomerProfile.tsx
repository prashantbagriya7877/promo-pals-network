
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
import { useAuth } from "@/contexts/AuthContext";
import { useCoupons } from "@/hooks/useCoupons";

const CustomerProfile = () => {
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isLoggedIn } = useAuth();
  const { userCoupons, claimCoupon, markCouponAsUsed } = useCoupons();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  
  const [isEditing, setIsEditing] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  
  // Check for tab parameter in URL
  const [activeTab, setActiveTab] = useState<string>("profile");
  
  useEffect(() => {
    // If user is logged in, populate the form with user data
    if (user) {
      setCustomerName(user.name || "");
      setEmail(user.email || "");
      // In a real app, these would come from the user object too
      setPhone("(123) 456-7890");
      setAddress("456 Oak Lane, Anytown, USA");
    }

    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    if (tabParam && (tabParam === "profile" || tabParam === "coupons")) {
      setActiveTab(tabParam);
    }
  }, [user, location]);

  // Check if user is logged in
  useEffect(() => {
    if (!isLoggedIn) {
      toast({
        title: "Authentication Required",
        description: "Please log in to view your profile",
        variant: "destructive",
      });
      navigate("/login?from=/customer-profile");
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
    
    // Find if a coupon with this code exists
    // Note: In a real app, this would be an API call
    const couponToAdd = userCoupons.find(c => c.coupon && c.coupon.code === couponCode.trim());
    
    if (couponToAdd) {
      const success = claimCoupon(couponToAdd.coupon.id);
      if (success) {
        setCouponCode("");
      }
    } else {
      toast({
        title: "Invalid Coupon",
        description: "The coupon code you entered is invalid or has expired.",
        variant: "destructive",
      });
    }
  };

  const handleUseCoupon = (claimId: string) => {
    markCouponAsUsed(claimId);
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
                    {userCoupons.length === 0 ? (
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
                      userCoupons.map((coupon) => (
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
                              <span className="font-medium">{coupon.coupon.code}</span>
                            </div>
                            <p className="text-sm">{coupon.coupon.title}</p>
                            <div className="flex items-center">
                              <Building2 className="h-3 w-3 mr-1 text-gray-500" />
                              <p className="text-sm text-gray-500">{coupon.coupon.businessName}</p>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              {coupon.coupon.discount}
                            </div>
                            <div className="text-sm flex items-center">
                              <Clock className="h-3 w-3 mr-1 text-gray-500" />
                              <span className="text-gray-500">Expires: </span>
                              <span className="ml-1">{coupon.coupon.expiryDate}</span>
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
