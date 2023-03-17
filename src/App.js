import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import SubCollectionScreen from "./components/SubCollectionScreen";
import SimplifiedArticle from "./components/SimplifiedArticle";
function App() {
  // const [isSubCollectionToggled, setIsSubCollectionToggled] = useState(false);
  // const [isArticleToggled, setIsArticleToggled] = useState(false);

  // function doubleClickHandler(e) {
  //   setIsSubCollectionToggled(true);
  //   console.log();
  // }
  // function dblClkHandler(e) {
  //   setIsArticleToggled(true);
  // }
  return (
    <main className="h-[400px]  w-[400px] bg-blueish overflow-auto">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/subcollectionscreen" element={<SubCollectionScreen />} />
        <Route path="/simplifiedarticle" element={<SimplifiedArticle />} />
      </Routes>
    </main>
  );
}

export default App;

// {!isArticleToggled ? (
//   <>
//     {!isSubCollectionToggled ? (
//       <HomeScreen onDoubleClickOnCollection={doubleClickHandler} />
//     ) : (
//       <SubCollectionScreen
//         onDoubleClickOnSubCollection={dblClkHandler}
//         setIsSubCollectionToggled={setIsSubCollectionToggled}
//       />
//     )}
//   </>
// ) : (
//   <>
//     {isArticleToggled && (
//       <SimplifiedArticle setIsArticleToggled={setIsArticleToggled} />
//     )}
//   </>
// )}

/* <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/subcollectionscreen" element={<SubCollectionScreen />} />
        <Route path="/simplifiedarticle" element={<SimplifiedArticle />} />
      </Routes> */
