
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface AuthTabsProps {
  defaultTab?: "login" | "signup";
}

const AuthTabs = ({ defaultTab = "login" }: AuthTabsProps) => {
  const navigate = useNavigate();

  const handleTabChange = (value: string) => {
    navigate(value === "login" ? "/login" : "/signup");
  };

  return (
    <Card className="w-full max-w-md p-6 animate-fadeIn">
      <Tabs defaultValue={defaultTab} className="w-full" onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="signup">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default AuthTabs;
