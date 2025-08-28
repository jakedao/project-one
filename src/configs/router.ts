import { AppLayout } from "@/components";
import {
  DemoPage,
  LandingPage,
  ListingPage,
  LoginPage,
  NotFoundPage,
  OrderSummaryPage,
  ProductDetailsPage,
} from "@/pages";
import { createBrowserRouter } from "react-router";

export enum ERoute {
  LOGIN = "login",
  HOME = "home",
  LISTING = "listing",
  CHECKOUT = "checkout",
  DEMO = "demo",
  NOT_ALLOW = "not-allow",
}

export const NAVIGATIONS = [
  {
    to: ERoute.LISTING,
    label: "Listing",
  },
  {
    to: ERoute.CHECKOUT,
    label: "Order Summary",
  },
  {
    to: ERoute.DEMO,
    label: "Demo",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      // PUBLIC ROUTES
      { path: "/login", Component: LoginPage },

      // PROTECTED ROUTES
      { path: `/${ERoute.HOME}`, Component: LandingPage },
      { path: `/${ERoute.LISTING}`, Component: ListingPage },
      { path: `/${ERoute.LISTING}/:id`, Component: ProductDetailsPage },
      { path: `/${ERoute.CHECKOUT}`, Component: OrderSummaryPage },
      { path: `/${ERoute.DEMO}`, Component: DemoPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

export default router;
