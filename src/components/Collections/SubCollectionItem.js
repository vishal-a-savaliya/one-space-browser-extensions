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
          <div className="flex gap-1 flex-wrap ">
            {props.tag.map((tag, index) => (
              <span
                key={index}
                className="bg-slate-300  inline-block px-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
      <div className="flex justify-center flex-col col-span-2">
        <DeleteButton
          onClick={() => props.onRemoveSubCollectionItem(props.id)}
        />
      </div>
    </li>
  );
}

export default SubCollectionItem;
