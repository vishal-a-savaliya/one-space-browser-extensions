import Search from "./UIComponents/Search";
import AddNew from "./UIComponents/AddNew";
import Collection from "./UIComponents/Collection";

function SubCollection() {
  return (
    <>
      <Search></Search>
      <AddNew></AddNew>
      <div>
        <Collection></Collection>
        <Collection></Collection>
        <Collection></Collection>
      </div>
    </>
  );
}
export default SubCollection;
