import React from "react";

function SubCollection(props) {
  return (
    <>
      <ul className="grid grid-rows-1 gap-[16px] mx-[20px] my-[25px]  ">
        {props.subCollectionName.map((subcollectionName) => (
          <li
            className="   bg-secondary"
            key={subcollectionName}
            onDoubleClick={props.onDoubleClick}
          >
            <div className="p-4">
              <div className="font-semibold text-base text-primary">
                {subcollectionName.name}
              </div>
              <div className="text-sky-500  font-semibold">
                {subcollectionName.link}
              </div>
              <div>{subcollectionName.tag}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default SubCollection;
