import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import { AppLayout } from "@/components";

import NotAllowPage from "@/pages/NotAllowPage/NotAllowPage";

const PaymentSuccessPage = lazy(
  () => import("@/pages/PaymentSuccessPage/PaymentSuccessPage")
);

const LoginPage = lazy(() => import("@/pages/LoginPage/LoginPage"));
const LandingPage = lazy(() => import("@/pages/LandingPage/LandingPage"));
const ListingPage = lazy(() => import("@/pages/ListingPage/ListingPage"));
const ProductDetailsPage = lazy(
  () => import("@/pages/ProducDetailPage/ProducDetailPage")
);
const OrderSummaryPage = lazy(
  () => import("@/pages/OrderSummaryPage/OrderSummaryPage")
);
const DemoPage = lazy(() => import("@/pages/DemoPage/DemoPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));

export enum ERoute {
  LOGIN = "login",
  HOME = "home",
  LISTING = "listing",
  CHECKOUT = "checkout",
  DEMO = "demo",
  NOT_ALLOW = "not-allow",
  SUCCESS = "payment-success",
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
      { path: `/${ERoute.LOGIN}`, Component: LoginPage },
      { path: `/${ERoute.NOT_ALLOW}`, Component: NotAllowPage },

      // PROTECTED ROUTES
      { path: `/${ERoute.HOME}`, Component: LandingPage },
      { path: `/${ERoute.LISTING}`, Component: ListingPage },
      { path: `/${ERoute.LISTING}/:id`, Component: ProductDetailsPage },
      { path: `/${ERoute.CHECKOUT}`, Component: OrderSummaryPage },
      { path: `/${ERoute.DEMO}`, Component: DemoPage },
      { path: `/${ERoute.SUCCESS}`, Component: PaymentSuccessPage },
      { path: `/${ERoute.DEMO}`, Component: DemoPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

export default router;
