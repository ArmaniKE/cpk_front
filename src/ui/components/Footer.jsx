import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00A3FF] border-t text-white py-3">
      <div className="px-10 flex justify-between">
        <div className="text-left text-[28px] font-semibold mt-3">
          CapitalPlastKZ
        </div>
        <div className="flex space-x-30 ml-40 mt-10">
          <div className="space-y-4">
            <div className="font-bold text-black">О компании</div>
            <div>Политика конфиденциальности</div>
            <div>Сертификаты</div>
            <div>Реквизиты</div>
          </div>
          <div className="space-y-4">
            <div className="font-bold text-black">Контакты</div>
            <div>Астана</div>
            <div>Алматы</div>
            <div>Актау</div>
            <div>Актобе</div>
            <div>Атырау</div>
            <div>Караганда</div>
            <div>Семей</div>
            <div>Уральск</div>
            <div>Усть-Каменогорск</div>
            <div>Петропавловск</div>
          </div>
          <div className="space-y-4">
            <div className="font-bold text-black">Полезно</div>
            <div>Условия возврата и гарантии</div>
            <div>Доставка</div>
            <div>Оплата</div>
          </div>
        </div>
        <div className="text-right text-[18px] mt-3">
          astana@capitalplast.kz <br />
          <br />
          8 (771) 051-00-33, <br />
          8 (702) 945-34-77 <br />
          <br />
          г. Астана, р/н Байконур ул.А.Пушкин 55/1 <br />
          <br />
          Пн-Пт: 9:00-18:00 <br />
          Сб-Вс: Выходной
        </div>
      </div>
      <div className="border-t border-white mt-6 pt-3 flex justify-between items-center px-10">
        <div>© 2025 Capital Plast KZ, Все права защищены</div>
        <img src="/footer/visa.svg" alt="Visa Logo" />
      </div>
    </footer>
  );
};

export default Footer;
