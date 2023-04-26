import CollectionItem from "./CollectionItem";

function CollectionList(props) {
  return (
    <>
      <ul className="grid grid-rows-1 gap-[16px] mx-[20px] my-[20px]  ">
        {props.collection.map((collection, i) => (
          <CollectionItem
            key={Math.random()}
            index={i}
            title={collection.title}
            description={collection.description}
            tags={collection.tags}
            onRemoveCollectionItem={props.onRemoveCollectionItem}
          />
        ))}
      </ul>
    </>
  );
}
export default CollectionList;
