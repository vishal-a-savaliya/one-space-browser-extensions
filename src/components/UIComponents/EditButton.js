import React from "react";
import CIcon from "@coreui/icons-react";
import { cilColorBorder } from "@coreui/icons";
function EditButton(props) {
  return (
    <button
      className=" invisible  hover:text-white hover:bg-black rounded-md group-hover:visible h-auto w-auto p-1"
      {...props}
    >
      <CIcon icon={cilColorBorder} size="xl" />
    </button>
  );
}
export default EditButton;
//invisible
