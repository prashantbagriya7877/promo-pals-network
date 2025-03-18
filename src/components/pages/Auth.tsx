
import { useEffect } from "react";
import { useRouter } from "next/router";
import AuthTabs from "@/components/auth/AuthTabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Auth = () => {
  const router = useRouter();
  const isLoginTab = router.pathname === "/login";

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center text-primary">
            {isLoginTab ? "Login to Your Account" : "Create an Account"}
          </h1>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            {isLoginTab 
              ? "Welcome back! Log in to access your coupons and manage your profile." 
              : "Join the WowPromo community to discover exclusive deals from local businesses."}
          </p>
          <div className="flex justify-center">
            <AuthTabs defaultTab={isLoginTab ? "login" : "signup"} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
