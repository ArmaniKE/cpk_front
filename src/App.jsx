import React from "react";
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider,Outlet,} from "react-router-dom";
import { Header1, Header2 } from "./ui/components/Headers";
import Home from "./ui/pages/Home";
import About from "./ui/pages/About";
import Cart from "./ui/pages/Cart";
import Delivery from "./ui/pages/Delivery";
import Pricelist from "./ui/pages/Pricelist";
import Wishlist from "./ui/pages/Wishlist";
import Footer from "./ui/components/Footer";
import Login from "./ui/pages/Login";
import Registration from "./ui/pages/Registration";
import AdminPanel from "./ui/pages/AdminPanel";
import Auth from "./ui/pages/Auth";
import Categories from "./ui/pages/Categories";
import Subcategory from "./ui/pages/Subcategory";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header1 />
      <Header2 />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function AdminLayout() {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
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
        {/* <Route path="catalog" element={<Catalog />} /> */}
        <Route path="categories" element={<Categories />} />
        <Route path="subcategory" element={<Subcategory />} />
        <Route path="auth" element={<Auth />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminPanel />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
