import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./UIComponents/Search";
import Button from "./UIComponents/Button";
import CollectionList from "./Collections/CollectionList";
import AddNewCollection from "./AddNewCollection";
import Wrapper from "./UIComponents/Wrapper";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { set, ref, onValue } from "firebase/database";

function HomeScreen() {
  //Hooks
  const [searchInput, setSearchInput] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [collection, setCollection] = useState([]);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  //End Hooks

  //Event Handlers
  const logOutHandler = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  function clickHandler() {
    setIsToggled(!isToggled);
  }

  function addNewCollectionHandler(collectionData) {
    setCollection((prev) => {
      const updatedCollection = [collectionData, ...prev];
      setDatabase(updatedCollection);
      return updatedCollection;
    });
  }

  function removeCollectionHandler(deletingCollectionName) {
    const newCollection = collection.filter(
      (collection) => collection.title !== deletingCollectionName
    );
    setDatabase(newCollection);
    setCollection(newCollection);
  }
  //End Event handlers

  //CRUD functions from db
  function setDatabase(data) {
    set(ref(db, "users/" + user.uid), { ...data });
  }
  useEffect(() => {
    // Check if user is logged in
    if (user === null) {
      navigate("/signin");
      return;
    }
    if (user) {
      // Create a database reference to the user's data based on their UID
      const userRef = ref(db, `users/${user.uid}`);

      // Listen for changes to the user's data in real-time
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          // Convert the data to an array and set it in state
          const data = snapshot.val();
          const dataArray = Object.keys(data).map((key) => data[key]);
          setCollection(dataArray);
        } else {
          console.log("No data available");
        }
      });
    }
  }, [user, navigate]);
  //End CRUD functions from db

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
