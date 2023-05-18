import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Button from "./UIComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "./UIComponents/Input";
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { googleSignIn, user, logIn, forgotPassword } = UserAuth();
  const googleSigninHandler = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  async function submitHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    if (email.trim().length === 0 || password.trim().length === 0) {
      setMessage("Above fields are required!!!");
      return;
    }
    try {
      await logIn(email, password);
      navigate("/homescreen");
    } catch (err) {
      console.log(err);
      setMessage(err.message);
    }
  }
  async function forgotPasswordHandler(e) {
    e.stopPropagation();
    if (!email) {
      setMessage("Enter a valid email");
      return;
    }
    try {
      await forgotPassword(email);
      setMessage("Check your Email for password reset request");
    } catch (err) {
      console.log(err);
      setMessage(err.message);
    }
  }
  function emailInputHandler(e) {
    setEmail(e.target.value);
  }
  function passwordInputHandler(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    if (user) {
      console.log(user);
      navigate("/homescreen");
    }
  }, [user, navigate]);

  return (
    <>
      <div
        className="bg-white  h-[25rem]  w-[25rem] "
        onClick={() => {
          setMessage("");
        }}
      >
        <h1 className="w-[25rem] text-center inline-block  px-24 py-6  text-xl font-bold">
          Welcome Back
        </h1>

        <div className="flex flex-col gap-6   ">
          <p className="text-center font-medium text-[16px] ">
            Please log in to continue...
          </p>
          <div>
            <form className="flex flex-col">
              <Input
                className="mx-10 my-2 border-2 focus:drop-shadow-md"
                type="email"
                placeholder="Enter your Email"
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
              <div className="flex-row-reverse flex">
                <div
                  className=" font-light text-right min-w-fit max-w-min hover:cursor-pointer text-[14px] mx-10  mb-1"
                  onClick={forgotPasswordHandler}
                >
                  Forgot Password?
                </div>
              </div>
              <div className="mx-10 text-sm text-red-900 ">{message}</div>

              <Button
                className="mx-10 my-2 rounded-none bg-c4 text-white"
                type="submit"
                onClick={submitHandler}
              >
                Log in
              </Button>
            </form>
            <div className="text-center font-light ">
              Don't have an account?
              <Link to={"/signup"}>
                <span className="mx-2 font-semibold">Sign up</span>
              </Link>
            </div>
          </div>
          {/* <Button onClick={googleSigninHandler}>Login With Google</Button> */}
        </div>
      </div>
    </>
  );
}
export default LoginScreen;
