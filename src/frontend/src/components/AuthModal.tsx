import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";
import type { User } from "../types";

export default function AuthModal() {
  const { isAuthOpen, setIsAuthOpen, login } = useApp();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPhone, setSignupPhone] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      toast.error("Please fill all fields");
      return;
    }
    const stored = localStorage.getItem(`fd_account_${loginEmail}`);
    if (!stored) {
      toast.error("Account not found. Please sign up.");
      return;
    }
    const user: User = JSON.parse(stored);
    login(user);
    toast.success(`Welcome back, ${user.name.split(" ")[0]}!`);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupName || !signupEmail || !signupPassword) {
      toast.error("Please fill all required fields");
      return;
    }
    const user: User = {
      id: `u_${Date.now()}`,
      name: signupName,
      email: signupEmail,
      phone: signupPhone,
      address: "",
    };
    localStorage.setItem(`fd_account_${signupEmail}`, JSON.stringify(user));
    login(user);
    toast.success(`Account created! Welcome, ${signupName.split(" ")[0]}!`);
  };

  return (
    <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
      <DialogContent className="max-w-sm" data-ocid="auth.dialog">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <UtensilsCrossed className="w-3.5 h-3.5 text-white" />
            </div>
            <DialogTitle className="font-display text-xl">
              FeastRush
            </DialogTitle>
          </div>
        </DialogHeader>

        <Tabs defaultValue="login">
          <TabsList className="w-full">
            <TabsTrigger value="login" className="flex-1" data-ocid="auth.tab">
              Sign In
            </TabsTrigger>
            <TabsTrigger value="signup" className="flex-1" data-ocid="auth.tab">
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-4">
            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <Label htmlFor="login-email" className="text-sm">
                  Email
                </Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  autoComplete="email"
                  className="mt-1"
                  data-ocid="auth.input"
                />
              </div>
              <div>
                <Label htmlFor="login-password" className="text-sm">
                  Password
                </Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  autoComplete="current-password"
                  className="mt-1"
                  data-ocid="auth.input"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-white hover:opacity-90 mt-2"
                data-ocid="auth.submit_button"
              >
                Sign In
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="mt-4">
            <form onSubmit={handleSignup} className="space-y-3">
              <div>
                <Label htmlFor="signup-name" className="text-sm">
                  Full Name *
                </Label>
                <Input
                  id="signup-name"
                  placeholder="Jane Smith"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  autoComplete="name"
                  className="mt-1"
                  data-ocid="auth.input"
                />
              </div>
              <div>
                <Label htmlFor="signup-email" className="text-sm">
                  Email *
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  autoComplete="email"
                  className="mt-1"
                  data-ocid="auth.input"
                />
              </div>
              <div>
                <Label htmlFor="signup-phone" className="text-sm">
                  Phone
                </Label>
                <Input
                  id="signup-phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={signupPhone}
                  onChange={(e) => setSignupPhone(e.target.value)}
                  autoComplete="tel"
                  className="mt-1"
                  data-ocid="auth.input"
                />
              </div>
              <div>
                <Label htmlFor="signup-password" className="text-sm">
                  Password *
                </Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  autoComplete="new-password"
                  className="mt-1"
                  data-ocid="auth.input"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-white hover:opacity-90 mt-2"
                data-ocid="auth.submit_button"
              >
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
