import React, { useState } from "react";

function AddNewCollection(props) {
  const [collectionName, setCollectionName] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(collectionName);
    console.log(collectionName);
    setCollectionName("");
    props.setIsToggled(false);
  }

  function inputHandler(e) {
    setCollectionName(e.target.value);
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        required
        placeholder="Collection Name"
        value={collectionName}
        onChange={inputHandler}
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default AddNewCollection;
