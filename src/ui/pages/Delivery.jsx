import React from "react";

const Delivery = () => {
  return (
    <div className="px-10 py-5 bg-[#E8E8E8]">
      <div className="text-[#6F6D6D] space-x-2 font-semibold">
        <span>Главная</span>
        <span>{">"}</span>
        <span>Доставка и оплата</span>
      </div>
      <div className="py-10">
        <h1 className="text-center text-[64px] font-semibold">
          Доставка и оплата
        </h1>
        <p className="py-10">
          Наша компания осуществляет доставку товаров по всей территории
          Казахстана при заказе на сумму свыше 500 000 тг. на договорных
          условиях (сроки и цена, зависят от расстояния)
          <br />
          <br />
          Заказы на меньшую сумму, осуществляются самовывозом с торговых точек в
          городах Нур-Султан, Алматы, Семей, Усть-Каменогорск, Уральск, Атырау,
          Актау, Актобе.
        </p>
      </div>
    </div>
  );
};

export default Delivery;
