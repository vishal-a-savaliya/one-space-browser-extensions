import React, { useState } from "react";
import Search from "./UIComponents/Search";
import Button from "./UIComponents/Button";
import Collection from "./UIComponents/Collection";
import AddNewCollection from "./AddNewCollection";
import Wrapper from "./UIComponents/Wrapper";
import Login from "./Login";

function HomeScreen(props) {
  const [searchInput, setSearchInput] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [collection, setCollection] = useState([
    {
      name: "College",
      about: "College Subjects",
      tag: "#college",
    },
  ]);
  // const [text, setText] = useState("");
  // const [tag, setTag] = useState("");

  function clickHandler() {
    setIsToggled(!isToggled);
  }
  function addNewCollectionHandler(collectionData) {
    setCollection((prev) => {
      return [collectionData, ...prev];
    });
  }
  return (
    <>
      <Wrapper>
        <Search
          onSearch={setSearchInput}
          searchText={searchInput}
          additionalCSS="col-span-2"
        ></Search>
        <Button onClick={clickHandler}>AddNew</Button>
        <Login />
      </Wrapper>
      {isToggled && (
        <AddNewCollection
          isToggled
          setIsToggled={setIsToggled}
          onAdd={addNewCollectionHandler}
        />
      )}
      <Collection
        collection={collection}
        onDoubleClick={props.onDoubleClickOnCollection}
      ></Collection>
    </>
  );
}
export default HomeScreen;
