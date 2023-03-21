import SubCollectionItem from "./SubCollectionItem";

function SubCollectionList(props) {
  return (
    <>
      <ul className="grid grid-rows-1 gap-[16px] mx-[20px] my-[25px]  ">
        {props.subCollection.map((subCollection) => (
          <SubCollectionItem
            key={subCollection.id}
            id={subCollection.id}
            name={subCollection.name}
            link={subCollection.link}
            tag={subCollection.tag}
            onRemoveSubCollectionItem={props.onRemoveSubCollectionItem}
          />
        ))}
      </ul>
    </>
  );
}
export default SubCollectionList;
