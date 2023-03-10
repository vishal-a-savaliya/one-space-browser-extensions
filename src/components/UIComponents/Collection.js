import React from "react";

function Collection(props) {
  return (
    <>
      <div className="grid grid-rows-1 gap-[16px] mx-[20px] my-[25px]  ">
        {props.collectionName.map((collectionName) => (
          <div
            className=" p-[5px] hover:bg-blackish hover:text-white rounded-[8px]  bg-greenish text-center"
            key={collectionName}
            onDoubleClick={props.onDoubleClick}
          >
            {collectionName}
          </div>
        ))}
      </div>
    </>
  );
}

export default Collection;
