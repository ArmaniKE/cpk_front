import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import { Header1, Header2 } from './components/Headers';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Delivery from './pages/Delivery';
import Pricelist from './pages/Pricelist';
import Wishlist from './pages/Wishlist';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="delivery" element={<Delivery />} />
      <Route path="pricelist" element={<Pricelist />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
