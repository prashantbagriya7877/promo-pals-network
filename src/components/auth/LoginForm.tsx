
import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface LoginFormProps {
  redirectPath?: string;
}

const LoginForm = ({ redirectPath = "/" }: LoginFormProps) => {
  const [userType, setUserType] = useState<"business" | "customer">("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const { login } = useAuth();

  // Use either the passed in redirectPath or the from in router query
  const from = (router.query.from as string) || redirectPath;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password, userType);
      toast({
        title: "Login successful",
        description: "Welcome back to WowPromo!",
      });
      
      // Redirect to the appropriate profile page or requested page
      if (userType === "business") {
        router.push("/business-profile");
      } else {
        router.push(from === "/login" ? "/customer-profile" : from);
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <Button
          type="button"
          variant={userType === "customer" ? "default" : "outline"}
          onClick={() => setUserType("customer")}
        >
          Customer
        </Button>
        <Button
          type="button"
          variant={userType === "business" ? "default" : "outline"}
          onClick={() => setUserType("business")}
        >
          Business
        </Button>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input 
          id="password" 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
