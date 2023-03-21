import { Link } from "react-router-dom";
function SubCollectionItem(props) {
  return (
    <li className="bg-secondary " key={props.key}>
      <Link>
        <div className="p-4">
          <div className="font-semibold text-base text-primary">
            {props.name}
          </div>
          <div className="text-sky-500  font-semibold">{props.link}</div>
          <div>{props.tag}</div>
        </div>
      </Link>
      <button onClick={() => props.onRemoveSubCollectionItem(props.id)}>
        X
      </button>
    </li>
  );
}

export default SubCollectionItem;
