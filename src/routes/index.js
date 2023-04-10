import Home from "~/pages/Home";
import Payment from "~/pages/Payment";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/payment", component: Payment, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
