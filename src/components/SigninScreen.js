import React, { useEffect } from "react";
import Login from "./Login";
import { UserAuth } from "../context/AuthContext";
import Button from "./UIComponents/Button";
import { useNavigate } from "react-router-dom";
function SigninScreen() {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();
  const googleSigninHandler = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/homescreen");
    }
  }, [user]);

  return (
    <>
      <div className="bg-slate-300 grid grid-rows-3  h-[25rem]  w-[25rem] ">
        <h1 className="w-[25rem] text-center inline-block row-span-1 px-24 pt-14 text-xl font-bold">
          Welcome To Saved-One Space
        </h1>

        <div className="flex flex-col gap-6  p-8 row-span-2">
          <p className="text-center font-semibold text-lg ">
            Please Login to Continue...
          </p>
          <Button onClick={googleSigninHandler}>Login</Button>
        </div>
      </div>
    </>
  );
}
export default SigninScreen;
