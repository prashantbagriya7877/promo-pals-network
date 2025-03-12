
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const SignupForm = () => {
  const [userType, setUserType] = useState<"business" | "customer">("customer");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Coming soon!",
      description: "Authentication will be implemented with Supabase integration.",
    });
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
          <Input id="businessName" required />
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
