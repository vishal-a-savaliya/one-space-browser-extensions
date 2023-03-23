import React, { useState } from "react";

function TagsInput(props) {
  const [tags, setTags] = useState([]);

  function keyDownHandler(e) {
    let actualTags;
    if (!e.target.value.trim()) return;
    if (e.key === "Enter") {
      setTags([...tags, e.target.value]);
      actualTags = [...tags, e.target.value];
      e.target.value = "";
    }

    props.onAdd(actualTags);
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }
  return (
    <div className=" flex items-center flex-wrap gap-[0.5em] m-2">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="bg-slate-300  inline-block px-2 py-1 rounded-[20px] text-sm"
        >
          <span>{tag}</span>
          <span
            onClick={() => removeTag(index)}
            className="h-[15px] w-[15px] bg-primary text-secondary rounded-full inline-flex justify-center items-center ml-[0.5em] text-[18px]"
          >
            &times;
          </span>
        </div>
      ))}
      <input
        onKeyDown={keyDownHandler}
        className=" grow   outline-none p-[8px]  text-sm rounded-[8px]"
        type="text"
        placeholder="Enter tags...(Optional)"
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
