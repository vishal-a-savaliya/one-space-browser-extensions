import React, { useState } from "react";
import Input from "./UIComponents/Input";
import Button from "./UIComponents/Button";
import TagsInput from "./UIComponents/TagsInput";
import CloseButton from "./UIComponents/CloseButton";
function EditSubCollection(props) {
  /*https://www.npmjs.com/package/react-tag-input*/

  // Hooks
  const [title, setTitle] = useState(props.title);
  const [link, setLink] = useState(props.url);
  const [tag, setTag] = useState(props.tags);

  // Essential Variables
  const subCollectionData = {
    title: title,
    url: link,
    tags: tag,
  };

  // Event Handlers
  function submitHandler(e) {
    e.preventDefault();
    if (title.trim().length === 0 || link.trim().length === 0) {
      return;
    }
    props.onEdit(subCollectionData);
    props.setToggleEdit(false);
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
    props.setToggleEdit(false);
  }
  return (
    <>
      <div
        className="fixed inset-0 bg-slate-500 h-[25rem] w-[25rem] opacity-80"
        onClick={closeHandler}
      ></div>
      <div className="fixed w-[350px]  translate-y-[-115px]  bg-[#f7f7f7] rounded-lg">
        <div className="px-4 py-2 font-semibold text-base text-primary flex justify-between">
          Edit
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
              tags={props.tags}
              className="border-2 focus:drop-shadow-md"
            />
            <Button onClick={submitHandler} className="p-[8px] m-[8px]">
              Save Changes
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default EditSubCollection;
