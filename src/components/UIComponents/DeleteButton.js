import React from "react";
function DeleteButton(props) {
  return (
    <button
      className="invisible group-hover:visible inline-block border-2 my-10 px-2 hover:bg-red-500 "
      {...props}
    >
      x
    </button>
  );
}
export default DeleteButton;
