import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  const updateQuantity = (itemId, action) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        if (action === 'increase') {
          item.quantity += 1;
        } else if (action === 'decrease' && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className='px-10 py-5 bg-[#E8E8E8]'>
      <div className="text-[#6F6D6D] space-x-2 font-semibold">
        <span className="">Главная</span>
        <span className="">{">"}</span>
        <span className="">Корзина</span>
      </div>
      <div className="mt-5">
        {cart.length === 0 ? (
          <p className='text-center p-10 text-[28px]'>Ваша корзина пуста</p>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {cart.map(item => {
              const price = parseFloat(item.price);
              const quantity = parseInt(item.quantity, 10);
              const totalPrice = (isNaN(price) || isNaN(quantity)) ? 0 : price * quantity;            
              return (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg relative">
                  <div className="flex justify-center">
                    <img src={item.image} alt={item.title} className="h-48 object-cover rounded-t-lg"/>
                  </div>
                  <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                  <p className="text-green-500 font-bold mt-2">{`Цена: ${item.price}₸`}</p>
                  <p className="text-green-500 font-bold mt-2">{`Итоговая цена: ${totalPrice}₸`}</p>
                  <div className="flex items-center space-x-2 mt-4 justify-center">
                    <button 
                      onClick={() => updateQuantity(item.id, 'decrease')} 
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 'increase')} 
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="absolute top-2 right-2 p-2 bg-red-200 rounded-full hover:bg-red-300"
                  >
                    <img src="/catalog/remove-icon.svg" alt="Remove" className="w-6 h-6"/>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
