import React, { useState } from "react";
import Input from "./UIComponents/Input";
import Button from "./UIComponents/Button";
import TagsInput from "./UIComponents/TagsInput";
function AddNewSubCollection(props) {
  /*https://www.npmjs.com/package/react-tag-input*/
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [tag, setTag] = useState("");
  function titleHandler(e) {
    setTitle(e.target.value);
  }
  function linkHandler(e) {
    setLink(e.target.value);
  }
  function tagHandler(e) {
    setTag(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(title);
    setTitle("");
    console.log(title, link, tag);
    props.setIsToggled(false);
  }
  return (
    <>
      <div className="fixed inset-0 bg-slate-500 h-[450px] w-[450px] opacity-75"></div>
      <div className="fixed w-[350px] translate-x-[44px] translate-y-[-64px] ">
        <form className=" bg-greenish grid grid-rows-1 gap-[16px] mx-[20px] my-[25px] rounded-[8px] p-[8px]">
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={titleHandler}
          />
          <Input
            type="text"
            placeholder="Link"
            value={link}
            onChange={linkHandler}
          />
          <TagsInput
            type="text"
            placeholder="Tag(Optional) "
            value={tag}
            onChange={tagHandler}
          />
          <Button onClick={submitHandler}>Save</Button>
        </form>
      </div>
    </>
  );
}
export default AddNewSubCollection;
