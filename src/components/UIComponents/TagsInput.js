import React, { useState } from "react";

function TagsInput() {
  const [tags, setTags] = useState([]);
  function keyDownHandler(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }
  return (
    <div className=" flex items-center flex-wrap gap-[0.5em]">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="bg-slate-300  inline-block px-[0.75em] py-[0.5em] rounded-[20px]"
        >
          <span className="">{tag}</span>
          <span
            onClick={() => removeTag(index)}
            className="h-[20px] w-[20px] bg-primary text-secondary rounded-full inline-flex justify-center items-center ml-[0.5em] text-[18px]"
          >
            &times;
          </span>
        </div>
      ))}
      <input
        onKeyDown={keyDownHandler}
        className=" grow py-[0.5em] px-[0] border-none outline-none "
        type="text"
        placeholder="Enter tags..."
      ></input>
    </div>
  );
}

export default TagsInput;
// border-2 border-solid border-black p-[0.5em]

/* <div className="bg-slate-300  inline-block px-[0.75em] py-[0.5em] rounded-[20px]">
        <span className="">hello</span>
        <span className="h-[20px] w-[20px] bg-primary text-secondary rounded-full inline-flex justify-center items-center ml-[0.5em] text-[18px]">
          &times;
        </span>
      </div> */
