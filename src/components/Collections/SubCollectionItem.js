import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteButton from "../UIComponents/DeleteButton";
import EditButton from "../UIComponents/EditButton";
import EditSubCollection from "../EditSubCollection";
import { db } from "../../firebase";
import { ref, update } from "firebase/database";
import { UserAuth } from "../../context/AuthContext";
function SubCollectionItem(props) {
  // Context
  const { user } = UserAuth();

  // Hooks
  const [data] = useState({
    title: props.title,
    url: props.url,
    tags: props.tags,
  });
  const [toggleEdit, setToggleEdit] = useState(false);

  // Event Handlers
  function editHandler() {
    setToggleEdit(true);
  }
  function editSubCollectionHandler(editedNote) {
    data.title = editedNote.title;
    data.url = editedNote.url;
    data.tags = editedNote.tags;
    updateNotes(editedNote);
  }
  function updateNotes(data) {
    update(
      ref(db, `users/${user.uid}/${props.notesIndex}/Notes/${props.index}`),
      {
        ...data,
      }
    );
  }
  return (
    <>
      {toggleEdit && (
        <EditSubCollection
          toggleEdit
          setToggleEdit={setToggleEdit}
          title={props.title}
          tags={props.tags}
          url={props.url}
          onEdit={editSubCollectionHandler}
        />
      )}
      <li className="bg-secondary group  grid grid-cols-10 gap-2">
        <Link
          className="col-span-8"
          to={`${data.title}`}
          state={{ title: data.title, url: data.url }}
        >
          <div className="p-2">
            <div className="font-bold text-base text-primary">{data.title}</div>
            <div className="text-sky-500  font-semibold">{data.url}</div>
            <div className="flex gap-2 flex-wrap ">
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
            onClick={() => props.onRemoveSubCollectionItem(data.title)}
          />
        </div>
      </li>
    </>
  );
}

export default SubCollectionItem;
// "users/" + user.uid + "/" + props.notesIndex + "/Notes/" + props.index
