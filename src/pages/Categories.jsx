import React from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data/categories";

const Categories = () => {
  const navigate = useNavigate();

  const handleSubcategoryClick = (subcategory) => {
    navigate("/subcategory", { state: subcategory });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {Object.entries(categories).map(([category, subcategories]) => (
        <div key={category} className="bg-white p-4 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">{category}</h2>
          <ul className="text-gray-600 text-lg">
            {subcategories.map((sub, index) => (
              <li key={index} className="mb-1">
                {typeof sub === "object" ? (
                  <span
                    className="text-sky-500 cursor-pointer hover:underline"
                    onClick={() => handleSubcategoryClick(sub)}
                  >
                    {sub.name}
                  </span>
                ) : (
                  sub
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Categories;