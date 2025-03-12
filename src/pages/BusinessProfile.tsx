
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Percent, Tag, Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Mock data
const mockCoupons = [
  {
    id: "1",
    code: "SUMMER25",
    discount: "25%",
    description: "Summer sale discount",
    expiryDate: "2023-09-30",
    usageLimit: 100,
    usageCount: 45,
  },
  {
    id: "2",
    code: "WELCOME10",
    discount: "10%",
    description: "New customer welcome discount",
    expiryDate: "2023-12-31",
    usageLimit: 200,
    usageCount: 78,
  },
];

const BusinessProfile = () => {
  const { toast } = useToast();
  const [coupons, setCoupons] = useState(mockCoupons);
  const [businessName, setBusinessName] = useState("Coffee Haven");
  const [businessType, setBusinessType] = useState("Café");
  const [address, setAddress] = useState("123 Main St, Anytown, USA");
  const [phone, setPhone] = useState("(123) 456-7890");
  const [email, setEmail] = useState("info@coffeehaven.com");
  const [description, setDescription] = useState("A cozy coffee shop with a variety of specialty drinks and pastries.");
  
  const [isEditing, setIsEditing] = useState(false);
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discount: "",
    description: "",
    expiryDate: "",
    usageLimit: 0,
  });

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your business profile has been updated successfully.",
    });
    setIsEditing(false);
  };

  const handleAddCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newCoupon.code || !newCoupon.discount || !newCoupon.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all the required fields.",
        variant: "destructive",
      });
      return;
    }
    
    const coupon = {
      id: Date.now().toString(),
      ...newCoupon,
      usageCount: 0,
    };
    
    setCoupons([...coupons, coupon]);
    setNewCoupon({
      code: "",
      discount: "",
      description: "",
      expiryDate: "",
      usageLimit: 0,
    });
    
    toast({
      title: "Coupon Created",
      description: `Coupon code ${newCoupon.code} has been created successfully.`,
    });
  };

  const handleDeleteCoupon = (id: string) => {
    setCoupons(coupons.filter(coupon => coupon.id !== id));
    toast({
      title: "Coupon Deleted",
      description: "The coupon has been deleted successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Building2 className="h-8 w-8 text-primary mr-3" />
          <h1 className="text-3xl font-bold">Business Profile</h1>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="coupons">Coupons</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="h-5 w-5 mr-2" />
                    {businessName}
                  </CardTitle>
                  <CardDescription>{businessType}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-sm text-gray-500">{address}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Contact</p>
                      <p className="text-sm text-gray-500">{phone}</p>
                      <p className="text-sm text-gray-500">{email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">About</p>
                      <p className="text-sm text-gray-500">{description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Business Information</span>
                    {!isEditing && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setIsEditing(true)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
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
                          <Label htmlFor="businessName">Business Name</Label>
                          <Input 
                            id="businessName" 
                            value={businessName} 
                            onChange={(e) => setBusinessName(e.target.value)} 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessType">Business Type</Label>
                          <Input 
                            id="businessType" 
                            value={businessType} 
                            onChange={(e) => setBusinessType(e.target.value)} 
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
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="description">Business Description</Label>
                          <Input 
                            id="description" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
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
                          <h3 className="text-sm font-medium mb-1">Business Name</h3>
                          <p>{businessName}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">Business Type</h3>
                          <p>{businessType}</p>
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
                      <div>
                        <h3 className="text-sm font-medium mb-1">Business Description</h3>
                        <p>{description}</p>
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
                  <CardTitle>Create New Coupon</CardTitle>
                  <CardDescription>
                    Create a new coupon code for your customers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddCoupon} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="couponCode">Coupon Code</Label>
                      <Input
                        id="couponCode"
                        placeholder="e.g. SUMMER25"
                        value={newCoupon.code}
                        onChange={(e) => setNewCoupon({...newCoupon, code: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="discount">Discount</Label>
                      <Input
                        id="discount"
                        placeholder="e.g. 25% or $10"
                        value={newCoupon.discount}
                        onChange={(e) => setNewCoupon({...newCoupon, discount: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Input
                        id="description"
                        placeholder="Coupon description"
                        value={newCoupon.description}
                        onChange={(e) => setNewCoupon({...newCoupon, description: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        type="date"
                        value={newCoupon.expiryDate}
                        onChange={(e) => setNewCoupon({...newCoupon, expiryDate: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="usageLimit">Usage Limit</Label>
                      <Input
                        id="usageLimit"
                        type="number"
                        placeholder="Optional"
                        value={newCoupon.usageLimit || ""}
                        onChange={(e) => setNewCoupon({...newCoupon, usageLimit: parseInt(e.target.value) || 0})}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Coupon
                    </Button>
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
                    Manage your active coupon codes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {coupons.length === 0 ? (
                      <p className="text-center text-gray-500 py-8">
                        You haven't created any coupons yet.
                      </p>
                    ) : (
                      coupons.map((coupon) => (
                        <div
                          key={coupon.id}
                          className="border rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center">
                              <Tag className="h-4 w-4 mr-2 text-primary" />
                              <span className="font-medium">{coupon.code}</span>
                            </div>
                            <p className="text-sm text-gray-500">{coupon.description}</p>
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              <Percent className="h-3 w-3 inline-block mr-1" />
                              {coupon.discount}
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-500">Used: </span>
                              <span>{coupon.usageCount}/{coupon.usageLimit || "∞"}</span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteCoupon(coupon.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
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

export default BusinessProfile;
