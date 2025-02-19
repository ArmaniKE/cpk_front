import { useState } from "react";
import { register, login } from "../api";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
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
      if (isRegister) {
        console.log("Регистрация...");
        await register(formData);
        console.log("Регистрация успешна!");
        // console.log("Регистрация успешна! Входим...");
        // Auto-login after registration
        // const data = await login({ username: formData.username, password: formData.password });
        // console.log("Вход выполнен успешно!", data);
      } else {
        console.log("Вход...");
        const data = await login({ username: formData.username, password: formData.password });
        if (data.token) {
          console.log("Вход выполнен успешно! Перенаправление...");
          window.location.href = "/";
        }
      }
    } catch (error) {
      console.error("Ошибка:", error.response?.data || error.message);
      alert("Ошибка: " + (error.response?.data?.message || "Попробуйте снова"));
    }
  };
  
  return (
    <div className="flex   items-center justify-center py-10 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-4">
          {isRegister ? "Регистрация" : "Вход"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Имя
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Фамилия
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Электронная почта
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Имя пользователя
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Пароль
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          {isRegister && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Повторите пароль
              </label>
              <input
                type="password"
                name="re_password"
                value={formData.re_password}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-600 transition"
          >
            {isRegister ? "Зарегистрироваться" : "Войти"}
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          {isRegister ? "Уже есть аккаунт?" : "Нет аккаунта?"}{" "}
          <button
            type="button"
            className="text-sky-500 hover:underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Войти" : "Зарегистрироваться"}
          </button>
        </p>
      </div>
    </div>
  );
}