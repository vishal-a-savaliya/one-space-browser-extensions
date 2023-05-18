import React, { useEffect, useState } from "react";
import Search from "./UIComponents/Search";
import Button from "./UIComponents/Button";
import SubCollectionList from "./Collections/SubCollectionList";
import Wrapper from "./UIComponents/Wrapper";
import AddNewSubCollection from "./AddNewSubCollection";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { set, ref, onValue } from "firebase/database";
function SubCollectionScreen() {
  //Hooks
  const location = useLocation();
  const params = useParams();
  const [isToggled, setIsToggled] = useState(false);
  const [subCollection, setSubCollection] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  //End Hooks

  //Context
  const { user } = UserAuth();
  //EndContext

  //Essential variables
  const index = location.state.index;
  //End Essential variables

  //Event Handlers
  function backHandler() {
    navigate(-1);
  }

  function clickHandler() {
    setIsToggled(!isToggled);
  }

  function addNewSubCollectionHandler(subCollection) {
    setSubCollection((prev) => {
      const updatedNotes = [subCollection, ...prev];
      setNotes(updatedNotes);
      return updatedNotes;
    });
  }

  function removeSubCollectionHandler(deletingSubCollectionTitle) {
    console.log(subCollection);
    const newSubCollection = subCollection.filter(
      (subCollection) => subCollection.title !== deletingSubCollectionTitle
    );
    if (searchInput) {
      const searchedCollection = searchResults.filter(
        (collection) => collection.title !== deletingSubCollectionTitle
      );
      setSearchResults(searchedCollection);
    }
    setNotes(newSubCollection);
    setSubCollection(newSubCollection);
  }

  function searchHandler(e) {
    let searchTerm = e.target.value;
    setSearchInput(searchTerm);
    if (searchTerm !== "") {
      const searchedCollection = subCollection.filter((collection) => {
        return collection.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(searchedCollection);
    } else {
      setSearchResults(subCollection);
    }
  }
  //End Event Handlers

  // CRUD Functions
  function setNotes(data) {
    set(ref(db, "users/" + user.uid + "/" + index + "/Notes"), { ...data });
  }

  useEffect(() => {
    const readNotes = async () => {
      if (user) {
        // Create a database reference to the user's data based on their UID
        const userRef = ref(db, `users/${user.uid}/${index}/Notes`);

        // Listen for changes to the user's data in real-time
        onValue(userRef, (snapshot) => {
          if (snapshot.exists()) {
            // Convert the data to an array and set it in state
            const data = snapshot.val();
            const dataArray = Object.keys(data).map((key) => data[key]);
            setSubCollection(dataArray);
          } else {
            console.log("No data available");
          }
        });
      }
    };
    readNotes();
  }, [user, index]);
  //End CRUD Functions

  return (
    <>
      <div className="p-[3px]    font-semibold text-base text-primary grid grid-cols-10 border-b-2">
        <Button onClick={backHandler}>&larr;</Button>
        <span className="col-span-8 text-center pt-[8px]">
          {params.subcollection}
        </span>
      </div>
      <Wrapper>
        <Search
          additionalCSS="col-span-3"
          placeholder="Search From collection"
          value={searchInput}
          onSearch={searchHandler}
        ></Search>
        <Button onClick={clickHandler}>AddNew</Button>
      </Wrapper>
      {isToggled && (
        <AddNewSubCollection
          isToggled
          setIsToggled={setIsToggled}
          onAdd={addNewSubCollectionHandler}
        />
      )}
      <div className="overflow-auto h-[17rem] w-[25rem]">
        <SubCollectionList
          subCollection={searchInput.length < 1 ? subCollection : searchResults}
          onRemoveSubCollectionItem={removeSubCollectionHandler}
          notesIndex={index}
        />
      </div>
    </>
  );
}
export default SubCollectionScreen;
// "users/" + user.uid + "/" + index + "/Notes"
