const AdminPanel = () => {
  return (
    <div className="flex h-screen">
      <div className="border text-white text-lg bg-sky-500 font-medium w-[400px] h-full">
        <div className="border-b p-10 text-2xl text-center">AdminPanel</div>
        <div className="flex items-center p-5 pt-10">
          <img className="mr-3" src="/admin/down.svg" alt="icon" />
          Категории
        </div>
        <ul className="pl-10 space-y-5 pr-5 leading-6">
          <li className="flex">
            <img className="mr-3" src="/admin/left.svg" alt="icon" />
            Пластиковая упаковка
          </li>
          <li className="flex">
            <img className="mr-3" src="/admin/left.svg" alt="icon" />
            Картонно-бумажная продукция
          </li>
          <li className="flex">
            <img className="mr-3" src="/admin/left.svg" alt="icon" />
            Одноразовая посуда
          </li>
          <li className="flex">
            <img className="mr-3" src="/admin/left.svg" alt="icon" />
            Вспененная упаковка и алюминиевая фольга
          </li>
          <li className="flex">
            <img className="mr-3" src="/admin/left.svg" alt="icon" />
            Кондитерские аксессуары
          </li>
          <li className="pl-9 flex flex-col relative">
            <img
              className="ml-[-36px] absolute"
              src="/admin/down.svg"
              alt="icon"
            />
            Пищевая пленка и пакеты
            <ul className="pt-5 space-y-5">
              <li className="flex">
                <img className="mr-3" src="/admin/left.svg" alt="icon" />
                Пленки PE, POF, ПВХ
              </li>
              <li className="flex">
                <img className="mr-3" src="/admin/left.svg" alt="icon" />
                Пакеты полиэтиленовые
              </li>
            </ul>
          </li>
          <li className="flex">
            <img className="mr-3" src="/admin/left.svg" alt="icon" />
            Санитарная гигиена
          </li>
          <li className="flex">
            <img className="mr-3" src="/admin/left.svg" alt="icon" />
            Кондитерское сырьё
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-gray-100 p-30 flex flex-col">
        <div className="flex justify-between w-300">
          <div className="relative w-240 mb-10">
            <input
              type="text"
              placeholder="Поиск"
              className="border-2 border-gray-300 rounded-lg px-10 py-2 w-full focus:outline-none focus:border-sky-500 focus:border-2"
            />
            <img
              src="/header/search_icon.svg"
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            />
            <img
              src="/header/delete_icon.svg"
              alt="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-500"
            />
          </div>
          <div className="relative w-50 mb-10">
            <input
              type="text"
              placeholder="ID"
              className="border-2 border-gray-300 rounded-lg px-10 py-2 w-full focus:outline-none focus:border-sky-500 focus:border-2"
            />
            <img
              src="/header/search_icon.svg"
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            />
            <img
              src="/header/delete_icon.svg"
              alt="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-500"
            />
          </div>
        </div>
        <table className="w-300 border-sky-500">
          <thead className="bg-sky-500 text-white">
            <tr>
              <th className="border border-sky-500 p-2">
                <input type="checkbox" />
              </th>
              <th className="border border-sky-500 p-2">ID</th>
              <th className="border border-sky-500 p-2">Название</th>
              <th className="border border-sky-500 p-2">Активность</th>
              <th className="border border-sky-500 p-2">Дата изменения</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 1,
                name: "Пакет бумажный",
                active: "Да",
                date: "18.03.2025 15:01:36",
              },
              {
                id: 2,
                name: "Упаковка ECO",
                active: "Да",
                date: "18.03.2025 15:01:36",
              },
            ].map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border border-sky-500 p-2">
                  <input type="checkbox" />
                </td>
                <td className="border border-sky-500 p-2">{item.id}</td>
                <td className="border border-sky-500 p-2">{item.name}</td>
                <td className="border border-sky-500 p-2">{item.active}</td>
                <td className="border border-sky-500 p-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
