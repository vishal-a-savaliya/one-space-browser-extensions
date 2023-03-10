import React, { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import SubCollection from "./components/SubCollection";
import SimplifiedArticle from "./components/SimplifiedArticle";
function App() {
  const [isSubCollectionToggled, setIsSubCollectionToggled] = useState(false);
  function doubleClickHandler(e) {
    setIsSubCollectionToggled(true);
  }
  return (
    <main className="h-[400px]  w-[400px] bg-blueish !overflow-auto">
      {!isSubCollectionToggled ? (
        <HomeScreen onDoubleClick={doubleClickHandler} />
      ) : (
        <SubCollection />
      )}
      {/* <SimplifiedArticle></SimplifiedArticle> */}
    </main>
  );
}

export default App;
