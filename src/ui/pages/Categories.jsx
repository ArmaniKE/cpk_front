import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleSubClick = (subcategory) => {
    navigate("/subcategory", { state: subcategory });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("backend:8000/api/categories");
        // const response = await fetch("http://127.0.0.1:8000/api/categories");
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {categories.map(({ id, name, subcategories }) => (
        <div key={id} className="bg-white p-4 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <ul className="text-gray-600 text-lg">
            {Array.isArray(subcategories) ? (
              subcategories.map((sub) => (
                <li key={sub.id} className="mb-1">
                  <span
                    className="cursor-pointer hover:underline"
                    onClick={() => handleSubClick(sub)}
                  >
                    {sub.name}
                  </span>
                </li>
              ))
            ) : (
              <li>Нет подкатегорий</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Categories;
