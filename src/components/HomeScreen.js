import React from "react";
import Search from "./UIComponents/Search";
import AddNew from "./UIComponents/AddNew";
import Collection from "./UIComponents/Collection";

function HomeScreen() {
  return (
    <>
      <Search></Search>
      <AddNew></AddNew>
      <div>
        <Collection></Collection>
        <Collection></Collection>
        <Collection></Collection>
      </div>
    </>
  );
}
export default HomeScreen;
