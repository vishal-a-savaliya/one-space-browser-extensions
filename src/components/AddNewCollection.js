import React, { useState } from "react";
import Input from "./UIComponents/Input";
import Button from "./UIComponents/Button";
import TagsInput from "./UIComponents/TagsInput";
import CloseButton from "./UIComponents/CloseButton";

function AddNewCollection(props) {
  // Hooks
  const [collectionName, setCollectionName] = useState("");
  const [text, setText] = useState("");
  const [tag, setTag] = useState([]);

  // Essential Variables
  const collectionData = {
    title: collectionName,
    description: text,
    tags: tag ? tag : [],
  };

  // Event Handlers
  function submitHandler(e) {
    e.preventDefault();
    if (collectionName.trim().length === 0 || text.trim().length === 0) {
      return;
    }
    props.onAdd(collectionData);
    setCollectionName("");
    setText("");
    setTag([]);
    props.setIsToggled(false);
  }

  function nameInputHandler(e) {
    setCollectionName(e.target.value);
  }
  function textInputHandler(e) {
    setText(e.target.value);
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
        onClick={closeHandler}
        className="fixed inset-0 bg-slate-500 h-[25rem] w-[25rem] opacity-80"
      ></div>
      <div className="fixed w-[350px] translate-x-[23px]  translate-y-[-40px] bg-[#f7f7f7] rounded-sm">
        <div className="px-4 py-2 font-semibold text-base text-primary flex justify-between ">
          Add New Collection
          <div className="flex justify-center flex-col">
            <CloseButton onClick={closeHandler} />
          </div>
        </div>
        <div className="h-[288px] overflow-auto">
          <form className="grid grid-rows-1 border-t-2 p-2 ">
            <Input
              type="text"
              placeholder="Collection Name"
              value={collectionName}
              onChange={nameInputHandler}
              className="border-2 focus:drop-shadow-md"
            />
            <Input
              type="text"
              placeholder="Text"
              value={text}
              onChange={textInputHandler}
              className="border-2 focus:drop-shadow-md"
            />
            <TagsInput
              onAdd={tagAddHandler}
              className="border-2 focus:drop-shadow-md"
            />
            <Button
              onClick={submitHandler}
              className="p-[8px] m-[8px] rounded-sm font-semibold"
            >
              ADD
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddNewCollection;
