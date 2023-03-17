import React, { useState } from "react";
import Search from "./UIComponents/Search";
import Button from "./UIComponents/Button";
import SubCollection from "./UIComponents/SubCollection";
import Wrapper from "./UIComponents/Wrapper";
import AddNewSubCollection from "./AddNewSubCollection";

function SubCollectionScreen(props) {
  const [isToggled, setIsToggled] = useState(false);
  const [subCollectionName, setSubCollectionName] = useState([
    "MAD",
    "CD",
    "MCWC",
    "CPDP",
  ]);

  function backHandler(e) {
    props.setIsSubCollectionToggled(false);
  }

  function clickHandler(e) {
    setIsToggled(!isToggled);
  }
  function addNewSubCollectionHandler(name) {
    setSubCollectionName((prev) => {
      return [name, ...prev];
    });
  }
  return (
    <>
      <div className="p-[5px]  rounded-[8px]  bg-pinkish grid grid-cols-10">
        <Button onClick={backHandler}>&larr;</Button>
        <span className="col-span-8 text-center pt-[8px]">SubCollection</span>
      </div>
      <Wrapper>
        <Search additionalCSS="col-span-3"></Search>
        <Button onClick={clickHandler}>AddNew</Button>
      </Wrapper>
      {isToggled && (
        <AddNewSubCollection
          isToggled
          setIsToggled={setIsToggled}
          onAdd={addNewSubCollectionHandler}
        />
      )}
      <SubCollection
        subCollectionName={subCollectionName}
        onDoubleClick={props.onDoubleClickOnSubCollection}
      ></SubCollection>
    </>
  );
}
export default SubCollectionScreen;
