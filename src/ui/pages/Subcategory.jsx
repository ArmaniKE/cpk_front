import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Subcategory = () => {
  const location = useLocation();
  const subcategory = location.state;

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [pressed, setPressed] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    const initialPressed = {};
    cart.forEach((item) => {
      initialPressed[item.name] = true;
    });
    setPressed(initialPressed);
  }, [cart]);

  useEffect(() => {
    const fetchItems = async () => {
      if (subcategory && subcategory.id) {
        try {
          const response = await fetch(
            `http://127.0.0.1:8000/api/items?category-id=${subcategory.id}`
          );
          if (!response.ok) {
            throw new Error("Ошибка при получении товаров");
          }
          const data = await response.json();
          setItems(data);
        } catch (error) {
          console.error("Ошибка:", error);
        }
      }
    };
    fetchItems();
  }, [subcategory]);

  const handleWishToggle = (item) => {
    let updatedWishlist = [...wishlist];
    const itemIndex = updatedWishlist.findIndex((w) => w.name === item.name);
    if (itemIndex === -1) {
      updatedWishlist.push(item);
    } else {
      updatedWishlist.splice(itemIndex, 1);
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleBuyClick = (item) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((c) => c.name === item.name);
    if (itemIndex === -1) {
      updatedCart.push({ ...item, quantity: 1 });
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setPressed((prevState) => ({
      ...prevState,
      [item.name]: true,
    }));
  };

  if (!subcategory || !items.length) {
    return <p className="text-center text-red-500">Товары не найдены</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{subcategory.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => {
          const isInWishlist = wishlist.some((w) => w.name === item.name);
          return (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-lg relative flex flex-col"
            >
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => handleWishToggle(item)}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <img
                    src={
                      isInWishlist
                        ? "/catalog/heart-filled.svg"
                        : "/catalog/heart-empty.svg"
                    }
                    alt="Wishlist"
                    className="w-6 h-6"
                  />
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="h-40 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-bold mt-2">{item.price}</p>
              <button
                onClick={() => handleBuyClick(item)}
                className={`mt-auto p-2 rounded-full text-white ${
                  pressed[item.name] ? "bg-sky-300" : "bg-sky-500"
                }`}
              >
                <span>
                  {pressed[item.name] ? "Добавлено в корзину" : "Купить"}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Subcategory;
