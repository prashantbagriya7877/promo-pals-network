
// Types for our coupon data structures
export interface CouponData {
  id: string;
  title: string;
  code: string;
  discount: string;
  description: string;
  businessId: string;
  businessName: string;
  location: string;
  category: string;
  imageUrl?: string;
  expiryDate: string;
  isActive: boolean;
  createdAt: string;
}

export interface ClaimedCoupon {
  id: string;
  couponId: string;
  userId: string;
  claimedAt: string;
  usedAt?: string;
  isUsed: boolean;
}

// Mock data storage - in a real app, this would be in a database
let coupons: CouponData[] = [];
let claimedCoupons: ClaimedCoupon[] = [];

// Initialize with some sample data from localStorage or defaults
export const initCouponData = () => {
  const savedCoupons = localStorage.getItem('wowpromo_coupons');
  const savedClaimedCoupons = localStorage.getItem('wowpromo_claimed_coupons');
  
  if (savedCoupons) {
    coupons = JSON.parse(savedCoupons);
  }
  
  if (savedClaimedCoupons) {
    claimedCoupons = JSON.parse(savedClaimedCoupons);
  }
};

// Save data to localStorage
const saveData = () => {
  localStorage.setItem('wowpromo_coupons', JSON.stringify(coupons));
  localStorage.setItem('wowpromo_claimed_coupons', JSON.stringify(claimedCoupons));
};

// Coupon CRUD operations
export const getAllCoupons = () => {
  return [...coupons].filter(coupon => coupon.isActive);
};

export const getCouponById = (id: string) => {
  return coupons.find(coupon => coupon.id === id);
};

export const getCouponsByBusiness = (businessId: string) => {
  return coupons.filter(coupon => coupon.businessId === businessId);
};

export const createCoupon = (couponData: Omit<CouponData, 'id' | 'createdAt'>) => {
  const newCoupon: CouponData = {
    ...couponData,
    id: `coupon-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  
  coupons.push(newCoupon);
  saveData();
  return newCoupon;
};

export const updateCoupon = (id: string, updates: Partial<CouponData>) => {
  const index = coupons.findIndex(coupon => coupon.id === id);
  if (index === -1) return null;
  
  coupons[index] = { ...coupons[index], ...updates };
  saveData();
  return coupons[index];
};

export const deleteCoupon = (id: string) => {
  const index = coupons.findIndex(coupon => coupon.id === id);
  if (index === -1) return false;
  
  coupons.splice(index, 1);
  saveData();
  return true;
};

// Claimed coupons operations
export const getUserCoupons = (userId: string) => {
  const userClaimed = claimedCoupons.filter(claim => claim.userId === userId);
  return userClaimed.map(claim => {
    const coupon = getCouponById(claim.couponId);
    return {
      ...claim,
      coupon
    };
  });
};

export const claimCoupon = (userId: string, couponId: string) => {
  // Check if already claimed
  const existing = claimedCoupons.find(
    claim => claim.userId === userId && claim.couponId === couponId
  );
  
  if (existing) return existing;
  
  const newClaim: ClaimedCoupon = {
    id: `claim-${Date.now()}`,
    couponId,
    userId,
    claimedAt: new Date().toISOString(),
    isUsed: false
  };
  
  claimedCoupons.push(newClaim);
  saveData();
  return newClaim;
};

export const markCouponAsUsed = (claimId: string) => {
  const index = claimedCoupons.findIndex(claim => claim.id === claimId);
  if (index === -1) return false;
  
  claimedCoupons[index] = {
    ...claimedCoupons[index],
    isUsed: true,
    usedAt: new Date().toISOString()
  };
  
  saveData();
  return true;
};

// Statistics for businesses
export const getBusinessStatistics = (businessId: string) => {
  const businessCoupons = getCouponsByBusiness(businessId);
  const couponIds = businessCoupons.map(coupon => coupon.id);
  
  const claims = claimedCoupons.filter(claim => couponIds.includes(claim.couponId));
  const usedClaims = claims.filter(claim => claim.isUsed);
  
  return {
    totalCoupons: businessCoupons.length,
    activeCoupons: businessCoupons.filter(coupon => coupon.isActive).length,
    totalClaimed: claims.length,
    totalRedeemed: usedClaims.length,
    redemptionRate: claims.length > 0 ? (usedClaims.length / claims.length) * 100 : 0,
    couponPerformance: businessCoupons.map(coupon => {
      const couponClaims = claims.filter(claim => claim.couponId === coupon.id);
      const couponRedeemed = couponClaims.filter(claim => claim.isUsed);
      
      return {
        id: coupon.id,
        title: coupon.title,
        discount: coupon.discount,
        claims: couponClaims.length,
        redeemed: couponRedeemed.length,
        redemptionRate: couponClaims.length > 0 
          ? (couponRedeemed.length / couponClaims.length) * 100 
          : 0
      };
    })
  };
};

// Initialize data when the module is imported
initCouponData();
