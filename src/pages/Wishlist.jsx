import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (itemIndex) => {
    // console.log("Removing item at index:", itemIndex);
    const updatedWishlist = wishlist.filter((_, index) => index !== itemIndex);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="px-10 py-5 bg-[#E8E8E8]">
      <div className="text-[#6F6D6D] space-x-2 font-semibold">
        <span className="">Главная</span>
        <span className="">{">"}</span>
        <span className="">Избранное</span>
      </div>
      <div className="mt-5 mb-10">
        {wishlist.length === 0 ? (
          <p className="text-center p-20 text-[28px]">
            Ваш список желаний пуст
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {wishlist.map((item, index) => (
              <div
                key={item.id || index}
                className="bg-white p-4 rounded-lg shadow-lg relative"
              >
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 object-cover rounded-t-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
                <p className="text-green-500 font-bold mt-2">{item.price}</p>
                <button
                  onClick={() => removeFromWishlist(index)}
                  className="absolute top-2 right-2 p-2 bg-red-200 rounded-full hover:bg-red-300"
                >
                  <img
                    src="/catalog/remove-icon.svg"
                    alt="Remove"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
