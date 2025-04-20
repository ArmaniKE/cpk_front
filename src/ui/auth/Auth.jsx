import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../services/api";
import Login from "./Login";
import Registration from "./Registration";
import Profile from "./Profile";

export default function Auth() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    if (token) {
      fetchUser(dispatch); // Fetch user data if token exists
    }
  }, [token, dispatch]);

  if (token) {
    return <Profile />;
  }

  return isRegister ? (
    <Registration toggleForm={() => setIsRegister(false)} />
  ) : (
    <Login toggleForm={() => setIsRegister(true)} />
  );
}
