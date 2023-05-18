import React, { useState } from "react";
import Input from "./UIComponents/Input";
import Button from "./UIComponents/Button";
import TagsInput from "./UIComponents/TagsInput";
import CloseButton from "./UIComponents/CloseButton";
function AddNewSubCollection(props) {
  /*https://www.npmjs.com/package/react-tag-input*/

  // Hooks
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [tag, setTag] = useState([]);

  //Essential Variables
  const subCollectionData = {
    title: title,
    url: link,
    tags: tag ? tag : [],
  };

  // Event Handlers
  function submitHandler(e) {
    e.preventDefault();
    if (title.trim().length === 0 || link.trim().length === 0) {
      return;
    }
    props.onAdd(subCollectionData);
    setTitle("");
    setLink("");
    setTag([]);
    props.setIsToggled(false);
  }

  function titleHandler(e) {
    setTitle(e.target.value);
  }

  function linkHandler(e) {
    setLink(e.target.value);
  }

  function tagAddHandler(tags) {
    setTag(tags);
  }

  function closeHandler() {
    props.setIsToggled(false);
  }
  return (
    <>
      <div
        className="fixed inset-0 bg-slate-500 h-[25rem] w-[25rem] opacity-80 pt-2"
        onClick={closeHandler}
      ></div>
      <div className="fixed w-[350px] translate-x-[23px]  translate-y-[-90px]  bg-[#f7f7f7] rounded-md">
        <div className="px-4 py-2 font-semibold text-base text-primary flex justify-between">
          Add Notes
          <div className="flex justify-center flex-col">
            <CloseButton onClick={closeHandler} />
          </div>
        </div>
        <div className="h-[288px] overflow-auto">
          <form className=" grid grid-rows-1 border-2 p-2">
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={titleHandler}
              className="border-2 focus:drop-shadow-md"
            />
            <Input
              placeholder="Link"
              value={link}
              onChange={linkHandler}
              className="border-2 focus:drop-shadow-md"
            />
            <TagsInput
              onAdd={tagAddHandler}
              className="border-2 focus:drop-shadow-md"
            />
            <Button
              onClick={submitHandler}
              className="p-[8px] rounded-sm shadow-sm m-[8px] font-semibold"
            >
              ADD
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddNewSubCollection;
