import React from "react";
import CIcon from "@coreui/icons-react";
import { cilXCircle } from "@coreui/icons";
function DeleteButton(props) {
  return (
    <button
      className="invisible  group-hover:visible rounded-md hover:bg-black hover:text-white h-auto w-auto p-1 "
      {...props}
    >
      <CIcon icon={cilXCircle} size="xl" />
    </button>
  );
}
export default DeleteButton;
//invisible
