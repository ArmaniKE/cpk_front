import React, { useState, useEffect } from 'react';
import items from '../data/items'; 

const Catalog = () => {
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
  });
  const [pressed, setPressed] = useState({});
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  })
  useEffect(() => {
    const initialPressed = {};
    cart.forEach(item => {
      initialPressed[item.id] = true;
    });
    setPressed(initialPressed);
  }, [cart]);

  const handleWishlistToggle = (item) => {
    let updatedWishlist = [...wishlist];
    
    const itemIndex = updatedWishlist.findIndex(w => w.id === item.id);
    
    if (itemIndex === -1) {
      updatedWishlist.push(item); 
    } else {
      updatedWishlist.splice(itemIndex, 1);
    }

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const handleBuyClick = (item) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(c => c.id === item.id);

    if (itemIndex === -1) {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setPressed((prevState) => ({
      ...prevState,
      [item.id]: true,
    }));
  };

  return (
    <div className='px-10 py-5 bg-[#E8E8E8]'>
      <div className="text-[#6F6D6D] space-x-2 font-semibold">
        <span className="">Главная</span>
        <span className="">{">"}</span>
        <span className="">Каталог</span>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 mb-10">
        {items.map(item => {
          const isInWishlist = wishlist.some(w => w.id === item.id);

          return (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg relative flex flex-col">
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => handleWishlistToggle(item)}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <img
                    src={isInWishlist ? "/catalog/heart-filled.svg" : "/catalog/heart-empty.svg"}
                    alt="Wishlist"
                    className="w-6 h-6"
                  />
                </button>
              </div>
              <div className="flex justify-center">
                <img src={item.image} alt={item.title} className="h-48 object-cover rounded-t-lg"/>
              </div>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
              <p className="text-green-500 font-bold mt-2 mb-4">{item.price}</p>
              <button
                onClick={() => handleBuyClick(item)}
                className={`mt-auto p-2 rounded-full text-white ${pressed[item.id] ? 'bg-sky-300' : 'bg-sky-500'}`}
              >
                <span>{pressed[item.id] ? 'Добавлено в корзину' : 'Купить'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Catalog;
