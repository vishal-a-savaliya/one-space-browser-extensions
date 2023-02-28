import React from "react";

function AddNewPopUp() {
  return (
    <>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Link" />
        <input type="text" placeholder="Tag(Optional)" />
        /*https://www.npmjs.com/package/react-tag-input*/
        <button type="submit">Save</button>
      </form>
    </>
  );
}
export default AddNewPopUp;
