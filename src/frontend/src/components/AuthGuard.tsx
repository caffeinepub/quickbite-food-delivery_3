import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { identity, login } = useInternetIdentity();

  if (!identity) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <Alert>
          <Lock className="h-4 w-4" />
          <AlertTitle>Authentication Required</AlertTitle>
          <AlertDescription className="mt-2">
            Please log in to access this page.
          </AlertDescription>
        </Alert>
        <div className="mt-6 text-center">
          <Button onClick={login} size="lg">
            Login to Continue
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
