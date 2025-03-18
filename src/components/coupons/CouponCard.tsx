
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Percent, MapPin, Building2, Calendar, Copy, Check, EyeOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Coupon } from "@/types/coupon";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCoupons } from "@/hooks/useCoupons";

interface CouponCardProps {
  coupon: Coupon;
}

const CouponCard = ({ coupon }: CouponCardProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { claimCoupon } = useCoupons();

  const handleCopyCouponCode = () => {
    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    toast({
      title: "Coupon code copied!",
      description: `${coupon.code} has been copied to your clipboard.`,
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleClaimCoupon = () => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please login or sign up to claim this coupon.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    
    claimCoupon(coupon.id);
  };

  const handleRevealCode = () => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please login or sign up to view coupon codes.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow duration-200">
      {coupon.imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={coupon.imageUrl} 
            alt={coupon.title} 
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105" 
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{coupon.title}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <Building2 className="h-3.5 w-3.5 mr-1 text-gray-500" />
              {coupon.businessName}
            </CardDescription>
          </div>
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Percent className="h-3 w-3 mr-1" />
            {coupon.discount}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm text-gray-600 mb-3">{coupon.description}</p>
        <div className="flex flex-col gap-2 text-xs text-gray-500">
          <div className="flex items-center">
            <MapPin className="h-3.5 w-3.5 mr-1.5" />
            {coupon.location}
          </div>
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1.5" />
            Valid until: {coupon.expiryDate}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t">
        <div className="flex flex-col w-full gap-2">
          {isLoggedIn ? (
            <div className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-md">
              <span className="font-medium">{coupon.code}</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleCopyCouponCode}
                className="h-8 w-8 p-0"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          ) : (
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2"
              onClick={handleRevealCode}
            >
              <EyeOff className="h-4 w-4" />
              Login to View Code
            </Button>
          )}
          <Button className="w-full" onClick={handleClaimCoupon}>Claim Coupon</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CouponCard;
