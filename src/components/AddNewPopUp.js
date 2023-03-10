import React from "react";
import Input from "./UIComponents/Input";
import Button from "./UIComponents/Button";
function AddNewPopUp(props) {
  /*https://www.npmjs.com/package/react-tag-input*/

  function submitHandler(e) {
    e.preventDefault();
    props.setIsToggled(false);
  }
  return (
    <>
      <div className="fixed inset-0 bg-slate-500 h-[450px] w-[450px] opacity-75"></div>
      <div className="fixed w-[350px] translate-x-[44px] translate-y-[-64px] ">
        <form
          onSubmit={submitHandler}
          className=" bg-greenish grid grid-rows-1 gap-[16px] mx-[20px] my-[25px] rounded-[8px] p-[8px]"
        >
          <Input type="text" placeholder="Title" />
          <Input type="text" placeholder="Link" />
          <Input type="text" placeholder="Tag(Optional) " />
          <Button name="Save" type="submit"></Button>
        </form>
      </div>
    </>
  );
}
export default AddNewPopUp;
