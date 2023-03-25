import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./UIComponents/Search";
import Button from "./UIComponents/Button";
import CollectionList from "./Collections/CollectionList";
import AddNewCollection from "./AddNewCollection";
import Wrapper from "./UIComponents/Wrapper";
import Login from "./Login";

import { UserAuth } from "../context/AuthContext";

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
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  console.log(user);
  const logOutHandler = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
    console.log(user);
  };
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
  useEffect(() => {
    if (user === null) {
      navigate("/signin");
    }
  }, [user]);
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
        <Button onClick={logOutHandler}>Logout</Button>
        {/* <Login /> */}
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
