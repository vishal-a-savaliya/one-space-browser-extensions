import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Button from "./UIComponents/Button";

function SimplifiedArticle(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  function backHandler(e) {
    navigate(-1);
  }
  return (
    <>
      <div className="p-[5px]  rounded-[8px]  bg-pinkish grid grid-cols-10">
        <Button onClick={backHandler}>&larr;</Button>
        <h1 className="col-span-8 text-center pt-[8px]">
          {location.state.name}
        </h1>
      </div>

      <pre className="mt-[16px]">
        The steps include: <br /> 1)Download and install Android Studio.
        <br /> 2)Create a new project and select the type of app you want to
        create.
        <br /> 3)Customize the app's user interface by dragging and dropping
        widgets onto the app's layout.
        <br /> 4)Add behavior to the app by writing code in Java or Kotlin.
        <br /> 5)Test the app on an emulator or a physical device. <br />{" "}
        6)Debug and improve the app until it is ready for release.
      </pre>
    </>
  );
}
export default SimplifiedArticle;
