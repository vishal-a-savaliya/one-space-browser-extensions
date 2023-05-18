import Input from "./UIComponents/Input";
import Button from "./UIComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [err, setErr] = useState("");
  const { signUp } = UserAuth();
  const navigate = useNavigate();
  async function submitHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    if (
      email.trim().length === 0 ||
      password !== cnfPassword ||
      password.trim().length === 0 ||
      cnfPassword.trim().length === 0
    ) {
      setErr("Above fields are required!!!");
      if (password !== cnfPassword) setErr("Passwords must be same");
      return;
    }
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      console.log(err);
      setErr(err.message);
    }
  }
  function emailInputHandler(e) {
    setEmail(e.target.value);
  }
  function passwordInputHandler(e) {
    setPassword(e.target.value);
  }
  function cnfPasswordInputHandler(e) {
    setCnfPassword(e.target.value);
    if (e.target.value.length === 0) {
      setErr("");
    } else if (password !== e.target.value) {
      setErr("Passwords must be same");
    } else {
      setErr("");
    }
  }

  return (
    <>
      <div
        className="bg-white   h-[25rem]  w-[25rem] "
        onClick={() => {
          setErr("");
        }}
      >
        <h1 className="w-[25rem] text-center inline-block  px-24 py-2  text-xl font-bold">
          Welcome To Saved One-Space
        </h1>
        <div className="flex flex-col    ">
          <p className="text-center font-medium text-[16px] ">
            Create your account
          </p>
          <div>
            <form className="flex flex-col">
              <Input
                className="mx-10 my-2 border-2 focus:drop-shadow-md "
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={emailInputHandler}
                // required
              ></Input>
              <Input
                className="mx-10 my-2 border-2 focus:drop-shadow-md"
                type="password"
                placeholder="Password"
                value={password}
                onChange={passwordInputHandler}
                // required
              ></Input>
              <Input
                className="mx-10 my-2 border-2 focus:drop-shadow-md"
                type="password"
                placeholder="Confirm password"
                value={cnfPassword}
                onChange={cnfPasswordInputHandler}
                // required
              ></Input>
              <div className="mx-10 text-sm  text-red-900 ">{err}</div>
              <Button
                className="mx-10 my-2 rounded-none bg-c4 text-white"
                type="submit"
                onClick={submitHandler}
              >
                Sign up
              </Button>
            </form>
            <div className="text-center font-light ">
              Already have an account?
              <Link to={"/login"}>
                <span className="mx-2 font-semibold">Log in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupScreen;
