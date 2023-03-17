import React from "react";

function SubCollection(props) {
  return (
    <>
      <ul className="grid grid-rows-1 gap-[16px] mx-[20px] my-[25px]  ">
        {props.subCollectionName.map((subcollectionName) => (
          <li
            className=" p-[5px] hover:bg-blackish hover:text-white rounded-[8px]  bg-greenish text-center"
            key={subcollectionName}
            onDoubleClick={props.onDoubleClick}
          >
            {subcollectionName}
          </li>
        ))}
      </ul>
    </>
  );
}
export default SubCollection;
