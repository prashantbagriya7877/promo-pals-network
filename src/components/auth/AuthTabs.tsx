
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface AuthTabsProps {
  defaultTab?: "login" | "signup";
}

const AuthTabs = ({ defaultTab = "login" }: AuthTabsProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the "from" param from the URL if it exists for redirecting after login
  const params = new URLSearchParams(location.search);
  const from = params.get('from') || '/';

  const handleTabChange = (value: string) => {
    const currentParams = new URLSearchParams(location.search);
    navigate(`${value === "login" ? "/login" : "/signup"}?${currentParams.toString()}`);
  };

  return (
    <Card className="w-full max-w-md p-6 animate-fadeIn">
      <Tabs defaultValue={defaultTab} className="w-full" onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm redirectPath={from} />
        </TabsContent>
        <TabsContent value="signup">
          <SignupForm redirectPath={from} />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default AuthTabs;
