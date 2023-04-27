import React from "react";

function Button(props) {
  return (
    <>
      <button
        type="button"
        className={`bg-sky-500 text-secondary hover:bg-blackish hover:text-white py-2 px-1 rounded-lg ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
}
export default Button;
