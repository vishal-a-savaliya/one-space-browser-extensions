import React, { useState } from "react";
function Signup(props) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [isError, setIsError] = useState("");
  const emailHandler = (e) => setEmail(e.target.value);
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const cnfpasswordHandler = (e) => {
    setCnfPassword(e.target.value);

    if (password !== e.target.value) {
      setIsError("Confirm password must be same as password");
    } else {
      setIsError("");
    }
  };
  //   const checkValidation = (e) => {
  //     setCnfPassword(e.target.value);
  //     if (password === cnfPassword) {
  //       setIsError("");
  //     }
  //     if (password !== cnfPassword) {
  //       setIsError("Fuck Off");
  //     }
  //   };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(cnfPassword);
  };

  const loginHandler = () => props.onFormSwitch("login");
  return (
    <div>
      <form
        onSubmit={submitHandler}
        method="post"
        className="container mx-auto flex w-96 h-96 flex-col justify-around "
      >
        <h1 className="text-3xl font-bold    mx-auto">Sign-Up</h1>
        <div className="flex flex-col justify-center">
          <input
            value={email}
            onChange={emailHandler}
            className="mx-auto mb-3"
            type="email"
            placeholder="Enter your Email"
            required
          ></input>
          <input
            value={password}
            onChange={passwordHandler}
            className="mx-auto mt-3"
            type="password"
            placeholder="Password"
            required
          ></input>
          <input
            value={cnfPassword}
            onChange={cnfpasswordHandler}
            className="mx-auto mt-3"
            type="password"
            placeholder="Confirm Password"
            required
          ></input>
          <div>{isError}</div>
        </div>
        <button
          className="mx-28 border-2 border-c4 rounded-lg bg-c4 text-white"
          type="submit"
        >
          Signup
        </button>
      </form>
      <button onClick={loginHandler}>Login?</button>
    </div>
  );
}
export default Signup;
