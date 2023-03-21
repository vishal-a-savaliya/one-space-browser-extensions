import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import SubCollectionScreen from "./components/SubCollectionScreen";
import SimplifiedArticle from "./components/SimplifiedArticle";
function App() {
  return (
    <main className="h-[400px]  w-[400px] bg-blueish overflow-auto ">
      <Routes>
        <Route path="/" element={<Navigate replace to="/homescreen" />} />

        <Route path="/homescreen/*" element={<HomeScreen />} />
        <Route
          path="/homescreen/:collectionid/*"
          element={<SubCollectionScreen />}
        />
        <Route
          path="/homescreen/:collectionid/:subcollectionid"
          element={<SimplifiedArticle />}
        />

        <Route path="*" element={<div>Not Found</div>} />
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

// <Routes>
//   <Route path="/" element={<HomeScreen />} />
//   <Route path="/subcollectionscreen" element={<SubCollectionScreen />} />
//   <Route path="/simplifiedarticle" element={<SimplifiedArticle />} />
// </Routes>
