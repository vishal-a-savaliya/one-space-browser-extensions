import SubCollectionItem from "./SubCollectionItem";

function SubCollectionList(props) {
  return (
    <>
      <ul className="grid grid-rows-1 gap-[16px] mx-[20px] my-[25px]  ">
        {props.subCollection.map((subCollection, i) => (
          <SubCollectionItem
            key={Math.random()}
            index={i}
            title={subCollection.title}
            url={subCollection.url}
            tags={subCollection.tags}
            onRemoveSubCollectionItem={props.onRemoveSubCollectionItem}
            notesIndex={props.notesIndex}
          />
        ))}
      </ul>
    </>
  );
}
export default SubCollectionList;
