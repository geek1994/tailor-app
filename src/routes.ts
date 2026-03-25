import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { BookingFlow } from "./pages/BookingFlow";
import { OrderTracking } from "./pages/OrderTracking";
import { CustomerHelp } from "./pages/CustomerHelp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/book",
    Component: BookingFlow,
  },
  {
    path: "/orders/:orderId",
    Component: OrderTracking,
  },
  {
    path: "/help",
    Component: CustomerHelp,
  },
]);
