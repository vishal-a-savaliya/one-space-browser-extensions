import React, { useState } from "react";
import Button from "./Button";
function Input(props) {
  // const[required,setRequired]=useState(required)
  // if(props.required){

  // }
  return (
    <>
      <input
        type={props.type}
        required={props.required}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="p-[8px] m-[8px] text-sm rounded-[8px] outline-none"
      />
    </>
  );
}
export default Input;
