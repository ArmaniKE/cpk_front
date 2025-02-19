import React from 'react';
import { Link } from 'react-router-dom';


const Header1 = () => {
  return (
    <header className="relative py-6 px-20 bg-white border-b border-gray-300 flex items-center justify-between"> 
      <div className="flex items-center space-x-10">
        <Link to="/about" className="text-base font-medium text-black">О компании</Link>
        <Link to="/delivery" className="text-base font-medium text-black">Доставка и оплата</Link>
        <Link to="/pricelist" className="text-base font-medium text-black">Прайс-лист</Link>
      </div>
      <div className="flex items-center"> 
        <div className="flex items-center px-10">
          <div className="flex items-center"> 
            <div className="flex items-center px-10">
              <span className="text-base font-medium text-black mr-2">Астана</span>
              <img src="/header/dropdown_icon.svg" alt="Dropdown" className="h-3 w-3"/>
            </div>
          </div>
          <div className="flex items-center text-base font-medium text-black whitespace-nowrap"> 
            <div className="mr-2"><a href="tel:87710510033">8 (771) 051-00-33</a>, <a href="tel:87029453477">8 (702) 945-34-77</a></div>
            <img src="/header/dropdown_icon.svg" alt="Dropdown" className="h-3 w-3"/>
          </div>
        </div>
        <img src="/header/phone_icon.svg" alt="Phone" className="h-5 w-5" />
        <a href="#" className="text-base font-medium text-sky-500 underline ml-2"> 
          Заказать звонок
        </a>
      </div>
    </header>
  );
};

const Header2 = () => {
  return (
    <header className="relative py-3 px-20 bg-white border-b border-gray-300 flex items-center justify-between">
      <div className="flex items-center space-x-20">
        <Link to="/"><img src="/logo2.svg" alt="CapitalPlastKZ" className="h-[80px] w-[120px]" /></Link>
        <Link to="/categories">
          <button className="flex items-center bg-sky-500 hover:bg-sky-300 text-white font-medium py-2 px-6 rounded-lg">
            <img src="/header/catalog_icon.svg" alt="Catalog" className="mr-2 h-5 w-5" />
            Каталог товаров
          </button>
        </Link>
      </div>
      <div className="flex items-center flex-grow mr-20 ml-20">
        <div className="relative w-full">
          <input type="text" placeholder="Поиск по сайту" className="border border-gray-300 rounded-lg px-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500" />
          <img src="/header/search_icon.svg" alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          <img src="/header/delete_icon.svg" alt="Search" className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-500" />
        </div>
      </div>
      <div className="flex items-center space-x-10">
        <Link to="/auth"><img src="/header/user_icon.svg" alt="User" className="h-8 w-8" /></Link>
        <Link to="/wishlist"><img src="/header/heart_icon.svg" alt="Wishlist" className="h-8 w-8" /></Link>
        <Link to="/cart"><img src="/header/cart_icon.svg" alt="Cart" className="h-8 w-8" /></Link>
      </div>
    </header>
  );
};

export { Header1, Header2 };