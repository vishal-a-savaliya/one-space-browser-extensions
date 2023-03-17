import React, { useState } from "react";
import Input from "./UIComponents/Input";
import Button from "./UIComponents/Button";
import TagsInput from "./UIComponents/TagsInput";

function AddNewCollection(props) {
  const [collectionName, setCollectionName] = useState("");
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");
  const collectionData = {
    name: collectionName,
    about: text,
    tag: tag,
  };
  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(collectionData);
    setCollectionName("");
    setText("");
    setTag("");
    props.setIsToggled(false);
  }

  function nameInputHandler(e) {
    setCollectionName(e.target.value);
  }
  function textInputHandler(e) {
    setText(e.target.value);
  }
  function tagInputHandler(e) {
    setTag(e.target.value);
  }
  return (
    <>
      <div className="fixed inset-0 bg-slate-500 h-[450px] w-[450px] opacity-75"></div>
      <div className="fixed w-[350px] translate-x-4 translate-y--4  ">
        <form className="bg-greenish">
          <Input
            type="text"
            required
            placeholder="Collection Name"
            value={collectionName}
            onChange={nameInputHandler}
          />
          <Input
            type="text"
            required
            placeholder="text"
            value={text}
            onChange={textInputHandler}
          />
          <TagsInput
          // type="text"
          // required
          // placeholder="Tags"
          // value={tag}
          // onChange={tagInputHandler}
          />
          <Button onClick={submitHandler}>Add</Button>
        </form>
      </div>
    </>
  );
}
export default AddNewCollection;
