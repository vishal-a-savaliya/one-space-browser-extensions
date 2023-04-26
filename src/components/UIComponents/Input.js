import React from "react";

function Input(props) {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="p-[8px] m-[8px] text-sm rounded-[8px] outline-none"
      />
    </>
  );
}
export default Input;
