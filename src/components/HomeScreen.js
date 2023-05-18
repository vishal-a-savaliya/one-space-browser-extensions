import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./UIComponents/Search";
import Button from "./UIComponents/Button";
import CollectionList from "./Collections/CollectionList";
import AddNewCollection from "./AddNewCollection";
import Wrapper from "./UIComponents/Wrapper";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { set, ref, onValue, update } from "firebase/database";

function HomeScreen() {
  //Hooks
  const [isToggled, setIsToggled] = useState(false);
  const [collection, setCollection] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  //End Hooks
  useCallback(() => {
    setIsLoading(true);
  }, []);
  //Event Handlers
  const logOutHandler = async () => {
    try {
      await logOut();
      navigate("/login");
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
    if (searchInput) {
      const searchedCollection = searchResults.filter(
        (collection) => collection.title !== deletingCollectionName
      );
      setSearchResults(searchedCollection);
    }
    setDatabase(newCollection);
    setCollection(newCollection);
  }

  function searchHandler(e) {
    let searchTerm = e.target.value;
    setSearchInput(searchTerm);
    if (searchTerm !== "") {
      const searchedCollection = collection.filter((collection) => {
        return collection.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(searchedCollection);
    } else {
      setSearchResults(collection);
    }
  }
  //End Event handlers
  function setDatabase(data) {
    set(ref(db, "users/" + user.uid), { ...data });
  }

  useEffect(() => {
    const readDataBase = () => {
      // if (user === null) {
      //   navigate("/login");
      //   return;
      // }
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
        setIsLoading(false);
      }
    };
    readDataBase();
  }, [user]);
  //End CRUD functions from db

  return (
    <>
      <Wrapper>
        <Search
          additionalCSS="col-span-2"
          placeholder="Search... "
          value={searchInput}
          onSearch={searchHandler}
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
          collection={searchInput.length < 1 ? collection : searchResults}
          onRemoveCollectionItem={removeCollectionHandler}
        ></CollectionList>
      </div>
    </>
  );
}
export default HomeScreen;
