import React from "react";

function Wrapper(props) {
  return (
    <div className="mx-[20px] my-[20px] grid grid-cols-4 gap-[16px]  ">
      {props.children}
    </div>
  );
}

export default Wrapper;
