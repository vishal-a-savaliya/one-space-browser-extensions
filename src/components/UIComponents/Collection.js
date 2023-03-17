import React from "react";

function Collection(props) {
  return (
    <>
      <ul className="grid grid-rows-1 gap-[16px] mx-[20px] my-[25px]  ">
        {props.collection.map((collection) => (
          <li
            className=" bg-secondary"
            key={collection.name}
            onDoubleClick={props.onDoubleClick}
          >
            <div className="p-4">
              <div className="font-semibold text-base text-primary">
                {collection.name}
              </div>
              <div className="text-sky-500  font-semibold">
                {collection.about}
              </div>
              <div>{collection.tag}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Collection;
