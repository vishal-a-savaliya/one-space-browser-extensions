import React from "react";

const SubContext = React.createContext({
  subCollections: [],
  total: 0,
  addSubCollection: (subCollection) => {},
  removeSubCollection: (id) => {},
});
export default SubContext;
