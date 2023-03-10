import React, { useState } from "react";
import Search from "./UIComponents/Search";
import Button from "./UIComponents/Button";
import Collection from "./UIComponents/Collection";
import AddNewCollection from "./AddNewCollection";
import Wrapper from "./UIComponents/Wrapper";

function HomeScreen(props) {
  const [searchInput, setSearchInput] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [collectionName, setCollectionName] = useState([
    "College",
    "Games",
    "Hackathon",
    "Interview",
  ]);
  function clickHandler() {
    setIsToggled(!isToggled);
  }
  function addNewCollectionHandler(name) {
    setCollectionName((prev) => {
      return [name, ...prev];
    });
  }
  return (
    <>
      <Wrapper>
        <Search onSearch={setSearchInput} searchText={searchInput}></Search>
        <Button onClick={clickHandler} name="AddNew"></Button>
        <Button name="Login"></Button>
      </Wrapper>
      {isToggled && (
        <AddNewCollection
          isToggled
          setIsToggled={setIsToggled}
          onAdd={addNewCollectionHandler}
        />
      )}
      <Collection
        collectionName={collectionName}
        onDoubleClick={props.onDoubleClick}
      ></Collection>
    </>
  );
}
export default HomeScreen;
