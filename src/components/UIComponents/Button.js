import React from "react";

function Button(props) {
  return (
    <>
      <button
        type="button"
        className={`bg-sky-500 text-secondary hover:bg-blackish hover:text-white py-[8px] px-[16px] rounded-lg ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
}
export default Button;
