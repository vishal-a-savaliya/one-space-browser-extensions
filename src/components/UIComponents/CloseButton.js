import React from "react";
function CloseButton(props) {
  return (
    <button
      className="  h-[20px] w-[20px] bg-primary text-secondary rounded-full inline-flex justify-center items-center  text-[18px] pb-1 "
      {...props}
    >
      &times;
    </button>
  );
}
export default CloseButton;
//invisible
