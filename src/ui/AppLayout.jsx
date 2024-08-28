import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        {" "}
        {/* The outlet component renders the nested routes inside the app layout (Just like the children prop) */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
