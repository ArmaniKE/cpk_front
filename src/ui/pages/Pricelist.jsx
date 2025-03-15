import React from "react";

const Pricelist = () => {
  return (
    <div className="px-10 py-5 bg-[#E8E8E8]">
      <div className="text-[#6F6D6D] space-x-2 font-semibold">
        <span className="">Главная</span>
        <span className="">{">"}</span>
        <span className="">Прайс-лист</span>
      </div>
      <div className="flex flex-col items-center py-20">
        <img className="py-2" src="/pricelist/pdf.svg"></img>
        <a className="text-[18px] font-semibold text-[#00A3FF] underline" href="https://tdkazpoligraf.kz/include/%D0%9F%D0%A0%D0%90%D0%99%D0%A1%20-%20%20%D0%A1%D0%BF%D0%B5%D1%86%20%2001.06.2022.pdf">
          Скачать прайс-лист
        </a>
      </div>
    </div>
  );
};

export default Pricelist;
