
import CustomerProfile from "@/components/pages/CustomerProfile";
import { useRouter } from 'next/router';
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

export default function CustomerProfilePage() {
  const { user, isLoggedIn, isLoading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!isLoading && (!isLoggedIn || user?.userType !== 'customer')) {
      router.push('/login');
    }
  }, [isLoading, isLoggedIn, user, router]);
  
  if (isLoading || !isLoggedIn || user?.userType !== 'customer') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return <CustomerProfile />;
}
