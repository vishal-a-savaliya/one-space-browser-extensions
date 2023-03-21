import { Link } from "react-router-dom";
import DeleteButton from "../UIComponents/DeleteButton";
function SubCollectionItem(props) {
  return (
    <li className="bg-secondary group  grid grid-cols-10 " key={props.key}>
      <Link
        className="col-span-8"
        to={`${props.id}`}
        state={{ id: props.id, name: props.name, link: props.link }}
      >
        <div className="p-4">
          <div className="font-semibold text-base text-primary">
            {props.name}
          </div>
          <div className="text-sky-500  font-semibold">{props.link}</div>
          <div>{props.tag}</div>
        </div>
      </Link>
      <div className="flex justify-center col-span-2">
        <DeleteButton onClick={() => props.onRemoveSubCollectionItem(props.id)}>
          X
        </DeleteButton>
      </div>
    </li>
  );
}

export default SubCollectionItem;
