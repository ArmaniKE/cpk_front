import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Header1, Header2 } from "./ui/components/Headers";
import Home from "./ui/pages/Home";
import About from "./ui/pages/About";
import Cart from "./ui/pages/Cart";
import Delivery from "./ui/pages/Delivery";
import Pricelist from "./ui/pages/Pricelist";
import Wishlist from "./ui/pages/Wishlist";
import Footer from "./ui/components/Footer";
import AdminPanel from "./ui/pages/AdminPanel";
import Auth from "./ui/auth/Auth";
import Categories from "./ui/pages/Categories";
import Subcategory from "./ui/pages/Subcategory";

function Layout() {
  return (
    <>
      <Header1 />
      <Header2 />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="pricelist" element={<Pricelist />} />
        <Route path="categories" element={<Categories />} />
        <Route path="subcategory" element={<Subcategory />} />
        <Route path="auth" element={<Auth />} />
      </Route>
      <Route path="admin" element={<AdminPanel />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
