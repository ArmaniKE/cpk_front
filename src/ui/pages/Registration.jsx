import { useState } from "react";
import { register } from "../../services/api";

export default function Registration({ toggleForm }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    re_password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log("Регистрация...");
      await register(formData);
      // console.log("Регистрация успешна!");
      // alert("Регистрация успешна! Теперь войдите.");
      toggleForm(); // switch to login after successful registration
    } catch (error) {
      console.error("Ошибка:", error.message);
      alert("Ошибка: " + (error.message || "Попробуйте снова"));
    }
  };

  return (
    <div className="flex items-center justify-center py-10 bg-gray-100">
      <div className="w-md p-6 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-xl font-semibold text-center mb-4">Регистрация</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Имя</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Фамилия</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Электронная почта</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Имя пользователя</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Пароль</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Повторите пароль</label>
            <input
              type="password"
              name="re_password"
              value={formData.re_password}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-600 transition"
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Уже есть аккаунт?{" "}
          <button type="button" className="text-sky-500 hover:underline" onClick={toggleForm}>
            Войти
          </button>
        </p>
      </div>
    </div>
  );
}
