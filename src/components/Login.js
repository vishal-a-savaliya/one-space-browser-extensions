import React, { useEffect, useState } from "react";
import Button from "./UIComponents/Button";
import { auth, provider } from "./../firebase";
import { signInWithPopup } from "firebase/auth";
function Login(props) {
  const [value, setValue] = useState("");
  function loginHandler() {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  }
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return <Button onClick={loginHandler}>Login</Button>;
}
export default Login;
