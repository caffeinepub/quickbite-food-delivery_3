import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

export default function GuestCartWarning() {
  const { login } = useInternetIdentity();

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="flex items-center justify-between">
        <span className="text-sm">
          Please log in to save your cart and complete checkout.
        </span>
        <Button variant="outline" size="sm" onClick={login} className="ml-2">
          Login
        </Button>
      </AlertDescription>
    </Alert>
  );
}
