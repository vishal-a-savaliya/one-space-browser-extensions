import SubContext from "./sub-context";

function SubCollectionProvider(props) {
  return <SubContext.Provider>{props.children}</SubContext.Provider>;
}
export default SubCollectionProvider;
