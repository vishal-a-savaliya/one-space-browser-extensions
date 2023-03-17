import React, { useState } from "react";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailHandler = (e) => setEmail(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  const signUpHandler = () => {
    console.log("gg");
    props.onFormSwitch("signup");
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        action="#"
        method="post"
        className="container mx-auto flex w-96 h-96 flex-col justify-around"
      >
        <h1 className="text-3xl font-bold    mx-auto">Login</h1>
        <div className="flex flex-col justify-center">
          <input
            value={email}
            onChange={emailHandler}
            className="mx-auto mb-3"
            type="email"
            placeholder="Enter your Email"
            // required
          ></input>
          <input
            value={password}
            onChange={passwordHandler}
            className="mx-auto mt-3"
            type="password"
            placeholder="Password"
            // required
          ></input>
        </div>
        <button
          className="mx-28 border-2 border-c4 rounded-lg bg-c4 text-white"
          type="submit"
        >
          Login
        </button>
      </form>

      <button onClick={signUpHandler}>Signup?</button>
    </div>
  );
}
export default Login;
