import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../UIComponents/DeleteButton";
import EditButton from "../UIComponents/EditButton";
import EditCollection from "../EditCollection";
import { db } from "../../firebase";
import { ref, update } from "firebase/database";
import { UserAuth } from "../../context/AuthContext";
function CollectionItem(props) {
  // Context
  const { user } = UserAuth();
  // Hooks
  const [data] = useState({
    title: props.title,
    desc: props.description,
    tags: props.tags,
  });
  const [toggleEdit, setToggleEdit] = useState(false);

  // Event Handlers
  function editHandler() {
    setToggleEdit(true);
  }
  function editCollectionHandler(editedCollection) {
    data.title = editedCollection.title;
    data.desc = editedCollection.description;
    data.tags = editedCollection.tags;
    editDatabase(editedCollection);
  }

  // EditDataBase
  function editDatabase(data) {
    update(ref(db, `users/${user.uid}/${props.index}`), { ...data });
  }
  return (
    <>
      {toggleEdit && (
        <EditCollection
          toggleEdit
          setToggleEdit={setToggleEdit}
          title={props.title}
          tags={props.tags}
          description={props.description}
          onEdit={editCollectionHandler}
        />
      )}
      <li className=" bg-secondary group grid grid-cols-10 px-2 gap-2">
        <Link
          className="col-span-8 "
          to={`${data.title}`}
          state={{ index: props.index }}
        >
          <div className="p-2">
            <div className="font-bold text-base text-primary">{data.title}</div>
            <div className="text-sky-500  font-semibold">{data.desc}</div>
            <div className="flex flex-wrap gap-2 mt-2  ">
              {data.tags &&
                data.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-slate-300  inline-block  p-1 px-2 font-mono text-xs tracking-tighter"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </Link>
        <div className="flex justify-center flex-col col-span-1">
          <EditButton onClick={editHandler}></EditButton>
        </div>
        <div className="flex justify-center flex-col col-span-1">
          <DeleteButton
            onClick={() => props.onRemoveCollectionItem(data.title)}
          ></DeleteButton>
        </div>
      </li>
    </>
  );
}

export default CollectionItem;
