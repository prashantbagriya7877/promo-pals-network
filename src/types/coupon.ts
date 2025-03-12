
export interface Coupon {
  id: string;
  code: string;
  title: string;
  description: string;
  discount: string;
  category: string;
  businessName: string;
  businessId: string;
  location: string;
  expiryDate: string;
  imageUrl?: string;
  usageLimit?: number;
  usageCount: number;
  createdAt: string;
}

export interface ClaimedCoupon extends Coupon {
  status: 'active' | 'used' | 'expired';
  claimedAt: string;
  usedAt?: string;
}

export interface CouponStats {
  totalCoupons: number;
  activeCoupons: number;
  claimedCoupons: number;
  redemptionRate: number;
  popularCoupons: Coupon[];
}
