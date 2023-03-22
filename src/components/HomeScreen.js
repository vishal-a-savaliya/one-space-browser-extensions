import React, { useState } from "react";
import Search from "./UIComponents/Search";
import Button from "./UIComponents/Button";
import CollectionList from "./Collections/CollectionList";
import AddNewCollection from "./AddNewCollection";
import Wrapper from "./UIComponents/Wrapper";
import Login from "./Login";

const DUMMY_COLLECTION = [
  { id: "c1", name: "College", about: "College Subjects", tag: ["#college"] },
  { id: "c2", name: "Games", about: "My Games Collection", tag: ["#games"] },
  {
    id: "c3",
    name: "Placement",
    about: "Collection of placement topic",
    tag: ["#tpo"],
  },
  {
    id: "c4",
    name: "Clacement",
    about: "Collection of placement topic",
    tag: ["#tpo"],
  },
];

function HomeScreen(props) {
  const [searchInput, setSearchInput] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [collection, setCollection] = useState(DUMMY_COLLECTION);
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
  function removeCollectionHandler(deletingCollectionid) {
    const newCollection = collection.filter(
      (collection) => collection.id !== deletingCollectionid
    );
    setCollection(newCollection);
  }
  console.log(collection);
  return (
    <>
      <Wrapper>
        <Search
          onSearch={setSearchInput}
          searchText={searchInput}
          additionalCSS="col-span-2"
          placeholder="Search... "
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
      <div className="overflow-auto h-[20rem] w-[25rem]">
        <CollectionList
          collection={collection}
          onRemoveCollectionItem={removeCollectionHandler}
        ></CollectionList>
      </div>
    </>
  );
}
export default HomeScreen;

/* <Collection
        collection={collection}
        onDoubleClick={props.onDoubleClickOnCollection}
      ></Collection> */
