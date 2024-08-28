import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}

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
