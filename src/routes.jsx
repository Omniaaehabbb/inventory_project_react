import WarezoLandingPage from "./pages/home";
import OrderTracking from "./pages/orderTracking";
import RetailCoDashboard from "./pages/store_dashboard";

const routes = [
  {
    path: "/home",
    element: <WarezoLandingPage />
  },
  {
    path: "/orderTracking",
    element: <OrderTracking/>
  },
  {
    path: "/login",
    element: <EventsPage />
  },
  {
    path: "/dashboard",
    element: <RetailCoDashboard />
  },
  {
    path: "/productCatalog",
    element: <ContactPage />
  },
];
export { routes };