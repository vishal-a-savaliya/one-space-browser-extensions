import React from "react";
// import CIcon from "@coreui/icons-react";
// import { cilColorBorder } from "@coreui/icons";
function EditButton(props) {
  return (
    <button
      className=" invisible  hover:text-white hover:bg-black rounded-md group-hover:visible h-auto w-auto p-1"
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
      </svg>

    </button>
  );
}
export default EditButton;
//invisible
