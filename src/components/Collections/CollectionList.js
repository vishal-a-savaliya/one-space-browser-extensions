import Button from "../UIComponents/Button";
import CollectionItem from "./CollectionItem";

function CollectionList(props) {
  return (
    <>
      <ul className="grid grid-rows-1 gap-[16px] mx-[20px] my-[25px]  ">
        {props.collection.map((collection) => (
          <CollectionItem
            key={collection.id}
            id={collection.id}
            name={collection.name}
            about={collection.about}
            tag={collection.tag}
            onRemoveCollectionItem={props.onRemoveCollectionItem}
          />
        ))}
      </ul>
    </>
  );
}
export default CollectionList;
