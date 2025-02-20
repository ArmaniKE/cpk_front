import React from "react";
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider,Outlet,} from "react-router-dom";
import { Header1, Header2 } from "./components/Headers";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Delivery from "./pages/Delivery";
import Pricelist from "./pages/Pricelist";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AdminPanel from "./pages/AdminPanel";
import Auth from "./pages/Auth";
import Categories from "./pages/Categories";
import Subcategory from "./pages/Subcategory";

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
