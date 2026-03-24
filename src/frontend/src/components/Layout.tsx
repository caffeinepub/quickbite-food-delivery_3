import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, Outlet, useNavigate } from "@tanstack/react-router";
import {
  ChevronDown,
  LogOut,
  MapPin,
  Settings,
  ShoppingCart,
  User,
  UtensilsCrossed,
} from "lucide-react";
import { useState } from "react";
import { useApp } from "../context/AppContext";
import AuthModal from "./AuthModal";
import CartSidebar from "./CartSidebar";
import CheckoutModal from "./CheckoutModal";

const CITIES = ["Lucknow", "Raebareli", "Ayodhya", "Gonda"];

export default function Layout() {
  const {
    user,
    logout,
    setIsAuthOpen,
    cartCount,
    setIsCartOpen,
    isAdminLoggedIn,
  } = useApp();
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("Lucknow");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            data-ocid="nav.link"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <UtensilsCrossed className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Feast<span className="text-primary">Rush</span>
            </span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="hidden md:flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground bg-muted rounded-full px-3 py-1.5 transition-colors"
                data-ocid="nav.dropdown_menu"
              >
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>{selectedCity}, UP</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-44">
              {CITIES.map((city) => (
                <DropdownMenuItem
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={
                    selectedCity === city ? "font-semibold text-primary" : ""
                  }
                  data-ocid="nav.link"
                >
                  <MapPin className="w-3.5 h-3.5 mr-2" />
                  {city}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
              data-ocid="nav.button"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 flex items-center justify-center text-[10px] bg-primary text-white">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2"
                    data-ocid="nav.dropdown_menu"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {user.name[0].toUpperCase()}
                      </span>
                    </div>
                    <span className="hidden sm:block text-sm font-medium">
                      {user.name.split(" ")[0]}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem
                    onClick={() => navigate({ to: "/profile" })}
                    data-ocid="nav.link"
                  >
                    <User className="w-4 h-4 mr-2" /> My Profile
                  </DropdownMenuItem>
                  {isAdminLoggedIn && (
                    <DropdownMenuItem
                      onClick={() => navigate({ to: "/admin" })}
                      data-ocid="nav.link"
                    >
                      <Settings className="w-4 h-4 mr-2" /> Admin Panel
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={logout}
                    className="text-destructive"
                    data-ocid="nav.button"
                  >
                    <LogOut className="w-4 h-4 mr-2" /> Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                size="sm"
                onClick={() => setIsAuthOpen(true)}
                className="bg-primary text-white hover:opacity-90"
                data-ocid="nav.primary_button"
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-foreground text-white/70 py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-display font-bold text-lg text-white">
                  Feast<span className="text-primary">Rush</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Delivering happiness one meal at a time, across Uttar Pradesh.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">
                Quick Links
              </h4>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link
                    to="/"
                    className="hover:text-white transition-colors"
                    data-ocid="nav.link"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="hover:text-white transition-colors"
                    data-ocid="nav.link"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin"
                    className="hover:text-white transition-colors"
                    data-ocid="nav.link"
                  >
                    Restaurant Owner? Login
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">Serving</h4>
              <p className="text-sm">Lucknow · Raebareli · Ayodhya · Gonda</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-xs">
            © {new Date().getFullYear()}. Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </footer>

      <CartSidebar />
      <AuthModal />
      <CheckoutModal />
    </div>
  );
}
