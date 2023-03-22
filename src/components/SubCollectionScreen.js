import React, { useState } from "react";
import Search from "./UIComponents/Search";
import Button from "./UIComponents/Button";
import SubCollectionList from "./Collections/SubCollectionList";
import Wrapper from "./UIComponents/Wrapper";
import AddNewSubCollection from "./AddNewSubCollection";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const DUMMY_SUBCOLLECTION = [
  {
    id: "s1",
    name: "Mobile App Development",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-color",
    tag: ["#MAD"],
  },
  {
    id: "s2",
    name: "Compiler Design",
    link: "https://www.example.com",
    tag: ["#CD"],
  },
  {
    id: "s3",
    name: "MCWC",
    link: "https://www.example.com",
    tag: ["#MCWC"],
  },
];
function SubCollectionScreen(props) {
  const location = useLocation();
  const params = useParams();
  const [isToggled, setIsToggled] = useState(false);
  const [subCollection, setSubCollection] = useState(DUMMY_SUBCOLLECTION);
  const navigate = useNavigate();
  function backHandler(e) {
    navigate(-1);
  }

  function clickHandler(e) {
    setIsToggled(!isToggled);
  }
  function addNewSubCollectionHandler(name) {
    setSubCollection((prev) => {
      return [name, ...prev];
    });
  }
  function removeSubCollectionHandler(deletingSubCollectionid) {
    const newSubCollection = subCollection.filter(
      (subCollection) => subCollection.id !== deletingSubCollectionid
    );
    setSubCollection(newSubCollection);
  }
  return (
    <>
      <div className="p-[3px]    font-semibold text-base text-primary grid grid-cols-10 border-b-2">
        <Button onClick={backHandler}>&larr;</Button>
        <span className="col-span-8 text-center pt-[8px]">
          {location.state.name}
        </span>
      </div>
      <Wrapper>
        <Search
          additionalCSS="col-span-3"
          placeholder="Search From collection"
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
          subCollection={subCollection}
          onRemoveSubCollectionItem={removeSubCollectionHandler}
        />
      </div>
    </>
  );
}
export default SubCollectionScreen;
// {
//   /* <SubCollection
//   subCollection={subCollection}
//   onDoubleClick={props.onDoubleClickOnSubCollection}
//   ></SubCollection> */
// }

// {
//   /* <Routes>
//   <Route
//     path={`/homescreen/${params.collectionid}/:subcollectionid`}
//     element={<SimplifiedArticle />}
//   />
// </Routes> */
// }
