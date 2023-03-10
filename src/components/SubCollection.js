import Search from "./UIComponents/Search";
import Button from "./UIComponents/Button";
import Collection from "./UIComponents/Collection";
import Wrapper from "./UIComponents/Wrapper";
import React, { useState } from "react";
import AddNewPopUp from "./AddNewPopUp";

function SubCollection(props) {
  const [isToggled, setIsToggled] = useState(false);
  const [collectionName, setCollectionName] = useState([
    "Steps to create your first Mobile application",
    "Compiler Design Tutorial",
  ]);
  function clickHandler() {
    setIsToggled(!isToggled);
  }
  return (
    <>
      <div className="p-[5px]  rounded-[8px]  bg-pinkish grid grid-cols-10">
        <Button name="&larr;"></Button>
        <span className="col-span-8 text-center pt-[8px]">College</span>
      </div>
      <Wrapper>
        <Search></Search>
        <Button name="AddNew" onClick={clickHandler}></Button>
      </Wrapper>
      {isToggled && <AddNewPopUp isToggled setIsToggled={setIsToggled} />}
      <Collection
        collectionName={collectionName}
        onDoubleClick={props.onDoubleClick}
      ></Collection>
    </>
  );
}
export default SubCollection;
