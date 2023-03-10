import React from "react";
function Input(props) {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="p-[8px] m-[8px] text-sm rounded-[8px]"
      />
    </>
  );
}
export default Input;
