import { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";

export default function Auth() {
  const [isRegister, setIsRegister] = useState(false);

  return isRegister ? (
    <Registration toggleForm={() => setIsRegister(false)} />
  ) : (
    <Login toggleForm={() => setIsRegister(true)} />
  );
}
