import { useSelector, useDispatch } from "react-redux";
import { clearToken } from "../../state/slices/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("User in Profile component:", user);

  const handleLogout = () => {
    dispatch(clearToken());
    navigate("/auth");
  };

  const handleAdminRedirect = () => {
    navigate("/admin");
  };

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  if (!user) {
    return (
      <div className="px-10 py-5 bg-[#E8E8E8]">
        <div className="text-[#6F6D6D] space-x-2 font-semibold">
          <span>Главная</span>
          <span>{">"}</span>
          <span>Профиль</span>
        </div>
        <div className="flex flex-col items-center justify-center p-30 text-2xl space-y-10">
          <div className="w-fit">Данные пользователя отсутствуют.</div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 w-40 bg-red-500 text-white text-center items-center rounded hover:bg-red-400"
          >
            Выйти
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-10 py-5 bg-[#E8E8E8]">
      <div className="text-[#6F6D6D] space-x-2 font-semibold">
        <span>Главная</span>
        <span>{">"}</span>
        <span>Профиль</span>
      </div>
      <div className="p-20 flex flex-col items-center justify-center">
        <div className="text-2xl space-y-3">
          <h1 className="mb-4 font-bold">Профиль</h1>
          <p>Имя пользователя: {user.username}</p>
          <p>Имя: {user.first_name}</p>
          <p>Фамилия: {user.last_name}</p>
          <p>Электронная почта: {user.email}</p>
        </div>
        <div className="flex space-x-4 mt-15">
          <button
            onClick={handleLogout}
            className="w-40 px-4 py-2 bg-red-500 text-white text-2xl rounded hover:bg-red-400 cursor-pointer"
          >
            Выйти
          </button>
          {user.username === "admin" && (
            <button
              onClick={handleAdminRedirect}
              className="w-40 px-4 py-2 bg-sky-500 text-white text-2xl rounded hover:bg-sky-300 cursor-pointer"
            >
              Админ
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
