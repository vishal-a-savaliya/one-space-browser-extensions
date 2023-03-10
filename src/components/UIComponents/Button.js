import React from "react";

function Button({ onClick, name }) {
  return (
    <>
      <button
        type="button"
        className="bg-white text-black hover:bg-blackish hover:text-white py-[8px] px-[16px] rounded-[8px]"
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
}
export default Button;
