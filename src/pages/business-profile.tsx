
import BusinessProfile from "@/components/pages/BusinessProfile";
import { useRouter } from 'next/router';
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

export default function BusinessProfilePage() {
  const { user, isLoggedIn, isLoading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!isLoading && (!isLoggedIn || user?.userType !== 'business')) {
      router.push('/login');
    }
  }, [isLoading, isLoggedIn, user, router]);
  
  if (isLoading || !isLoggedIn || user?.userType !== 'business') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return <BusinessProfile />;
}
