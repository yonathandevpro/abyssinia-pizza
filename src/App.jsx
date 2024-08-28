import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

// Necessary to create routers this way to enable data loading feature since version 6.4
const router = createBrowserRouter([
  {
    element: (
      <AppLayout />
    ) /* It is called the layout route in React Router since it doesn't have a path */,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
