
import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface SignupFormProps {
  redirectPath?: string;
}

const SignupForm = ({ redirectPath = "/" }: SignupFormProps) => {
  const [userType, setUserType] = useState<"business" | "customer">("customer");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { toast } = useToast();
  const router = useRouter();
  const { signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await signup({
        name: userType === "business" ? businessName : name,
        email,
        password,
        userType,
      });
      
      toast({
        title: "Account created!",
        description: "Welcome to WowPromo!",
      });
      
      // Redirect to the appropriate profile page or the specified redirect path
      router.push(userType === "business" ? "/business-profile" : redirectPath);
    } catch (error) {
      toast({
        title: "Sign up failed",
        description: "There was an error creating your account. Please try again.",
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
      {userType === "business" && (
        <div className="space-y-2">
          <Label htmlFor="businessName">Business Name</Label>
          <Input 
            id="businessName" 
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required 
          />
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input 
          id="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
        />
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
        {isLoading ? "Creating Account..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default SignupForm;
