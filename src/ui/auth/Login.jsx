import PropTypes from "prop-types";
import { useState } from "react";
import { login } from "../../services/api";

export default function Login({ toggleForm }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log("Вход...");
      const data = await login({
        username: formData.username,
        password: formData.password,
      });
      if (data.token) {
        // console.log("Вход выполнен успешно! Перенаправление...");
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Ошибка:", error.message);
      alert("Ошибка: " + (error.message || "Попробуйте снова"));
    }
  };

  return (
    <div className="flex items-center justify-center py-10 bg-grey-100">
      <div className="w-md p-6 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-xl font-semibold text-center mb-4">Вход</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Имя пользователя
            </label>
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
          <button
            type="submit"
            className="w-full bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-600 transition"
          >
            Войти
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Нет аккаунта?{" "}
          <button
            type="button"
            className="text-sky-500 hover:underline"
            onClick={toggleForm}
          >
            Зарегистрироваться
          </button>
        </p>
      </div>
    </div>
  );
}

Login.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};
