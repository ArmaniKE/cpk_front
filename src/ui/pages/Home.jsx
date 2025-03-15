import React from 'react';

const Home = () => {
  return (
    <div className='bg-[#E8E8E8]'>
      <div
        className="relative bg-cover bg-center h-[600px] flex items-center justify-center"
        style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/81bLGIjtuQL.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center text-white z-10">
          <h1 className="text-[50px] font-bold">Посуда на вынос</h1>
          <p className="text-[24px] mt-4">
            Широкий ассортимент стильной и удобной посуды, идеально подходящей для вечеринок, уютных <br/>
            семейных посиделок, дружеских барбекю и профессионального кейтеринга. Прочные материалы, <br/>
            элегантный дизайн и практичность делают её отличным выбором для любого случая! <br/>
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-10 py-16 bg-[#F1F1F1] ">
        <div className="text-center">
          <img src="/home/box.svg" alt="Icon 1" className="w-10 h-10 mx-auto" />
          <p className="mt-2 text-[16px] w-50">Сеть складов и представительств по всему Казахстану</p>
        </div>
        <div className="text-center">
          <img src="/home/truck.svg" alt="Icon 2" className="w-10 h-10 mx-auto" />
          <p className="mt-2 text-[16px] w-50">Прямые поставки от производителя, эксклюзивные контракты</p>
        </div>
        <div className="text-center">
          <img src="/home/file.svg" alt="Icon 3" className="w-10 h-10 mx-auto" />
          <p className="mt-2 text-[16px] w-50">Вся продукция сертифицирована</p>
        </div>
        <div className="text-center">
          <img src="/home/case.svg" alt="Icon 4" className="w-10 h-10 mx-auto" />
          <p className="mt-2 text-[16px] w-50">Наши сотрудники – профессионалы своего дела</p>
        </div>
        <div className="text-center">
          <img src="/home/package.svg" alt="Icon 5" className="w-10 h-10 mx-auto" />
          <p className="mt-2 text-[16px] w-50">Мы предлагаем широкий выбор продукции</p>
        </div>
      </div>
      <div className="bg-[#E8E8E8] p-5"></div>
      <div className="flex justify-center items-center">
        <iframe 
          className="w-[1800px] h-[600px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.80062903098!2d76.94054937653864!3d43.255600078055124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e95db9d5077%3A0x826ad73ab97f6e5!2z0JrQsNC30LDRhdGB0YLQsNC90YHQutC-LdCR0YDQuNGC0LDQvdGB0LrQuNC5INCi0LXRhdC90LjRh9C10YHQutC40Lkg0KPQvdC40LLQtdGA0YHQuNGC0LXRgiwg0YPQu9C40YbQsCDQotC-0LvQtSDQkdC4IDU5LCDQkNC70LzQsNGC0YsgMDUwMDAw!5e0!3m2!1sru!2skz!4v1717426818025!5m2!1sru!2skz" 
        />
      </div>
      <div className="bg-[#E8E8E8] p-5"></div>
    </div>
  );
};

export default Home;
