
import AuthTabs from "@/components/auth/AuthTabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex justify-center">
          <AuthTabs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
