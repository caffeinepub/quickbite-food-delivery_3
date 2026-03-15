import { Toaster } from "@/components/ui/sonner";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import { AppProvider } from "./context/AppContext";
import AdminPanel from "./pages/AdminPanel";
import Home from "./pages/Home";
import OrderTracking from "./pages/OrderTracking";
import Profile from "./pages/Profile";
import RestaurantDetail from "./pages/RestaurantDetail";

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const restaurantRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/restaurant/$id",
  component: RestaurantDetail,
});

const orderTrackingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order-tracking/$orderId",
  component: OrderTracking,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: Profile,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPanel,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  restaurantRoute,
  orderTrackingRoute,
  profileRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
      <Toaster richColors />
    </AppProvider>
  );
}
