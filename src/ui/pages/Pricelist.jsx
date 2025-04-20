const Pricelist = () => {
  return (
    <div className="px-10 py-5 bg-[#E8E8E8]">
      <div className="text-[#6F6D6D] space-x-2 font-semibold">
        <span>Главная</span>
        <span>{">"}</span>
        <span>Прайс-лист</span>
      </div>
      <a
        className="flex flex-col items-center py-20 text-[18px] font-semibold text-[#00A3FF] underline"
        href="https://tdkazpoligraf.kz/include/%D0%9F%D0%A0%D0%90%D0%99%D0%A1%20-%20%20%D0%A1%D0%BF%D0%B5%D1%86%20%2001.06.2022.pdf"
        target="_blank"
      >
        <img className="py-2" src="/pricelist/pdf.svg"></img>
        Скачать прайс-лист
      </a>
    </div>
  );
};

export default Pricelist;
