
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
