
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import * as couponModel from '@/models/coupons';
import { useToast } from '@/components/ui/use-toast';

export function useCoupons() {
  const [coupons, setCoupons] = useState<ReturnType<typeof couponModel.getAllCoupons>>([]);
  const [userCoupons, setUserCoupons] = useState<ReturnType<typeof couponModel.getUserCoupons>>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  // Load all coupons
  useEffect(() => {
    setLoading(true);
    try {
      const allCoupons = couponModel.getAllCoupons();
      setCoupons(allCoupons);
      
      if (user) {
        const claimed = couponModel.getUserCoupons(user.id);
        setUserCoupons(claimed);
      }
    } catch (error) {
      console.error("Error loading coupons:", error);
      toast({
        title: "Error",
        description: "Failed to load coupons. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [user, toast]);

  // Claim a coupon
  const claimCoupon = (couponId: string) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please log in to claim this coupon",
        variant: "destructive",
      });
      return false;
    }

    try {
      couponModel.claimCoupon(user.id, couponId);
      
      // Refresh user coupons
      const claimed = couponModel.getUserCoupons(user.id);
      setUserCoupons(claimed);
      
      toast({
        title: "Success",
        description: "Coupon claimed successfully!",
      });
      
      return true;
    } catch (error) {
      console.error("Error claiming coupon:", error);
      toast({
        title: "Error",
        description: "Failed to claim coupon. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  // Mark a coupon as used
  const markCouponAsUsed = (claimId: string) => {
    try {
      couponModel.markCouponAsUsed(claimId);
      
      // Refresh user coupons
      if (user) {
        const claimed = couponModel.getUserCoupons(user.id);
        setUserCoupons(claimed);
      }
      
      toast({
        title: "Success",
        description: "Coupon marked as used!",
      });
      
      return true;
    } catch (error) {
      console.error("Error marking coupon as used:", error);
      toast({
        title: "Error",
        description: "Failed to update coupon. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  // Business operations
  const getBusinessCoupons = (businessId: string) => {
    return couponModel.getCouponsByBusiness(businessId);
  };

  const getBusinessStatistics = (businessId: string) => {
    return couponModel.getBusinessStatistics(businessId);
  };

  const createBusinessCoupon = (couponData: Parameters<typeof couponModel.createCoupon>[0]) => {
    try {
      const newCoupon = couponModel.createCoupon(couponData);
      
      // Refresh coupons
      const allCoupons = couponModel.getAllCoupons();
      setCoupons(allCoupons);
      
      toast({
        title: "Success",
        description: "Coupon created successfully!",
      });
      
      return newCoupon;
    } catch (error) {
      console.error("Error creating coupon:", error);
      toast({
        title: "Error",
        description: "Failed to create coupon. Please try again.",
        variant: "destructive",
      });
      return null;
    }
  };

  return {
    coupons,
    userCoupons,
    loading,
    claimCoupon,
    markCouponAsUsed,
    getBusinessCoupons,
    getBusinessStatistics,
    createBusinessCoupon,
  };
}
