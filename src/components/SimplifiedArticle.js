import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Button from "./UIComponents/Button";
import { useEffect } from "react";

function SimplifiedArticle(props) {
  const [webData, setWebData] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  function backHandler(e) {
    navigate(-1);
  }
  const URL = location.state.url;
  console.log(URL);

  useEffect(() => {
    async function simplyfyArticle() {
      setLoading(true);
      const response = await fetch(
        "https://one-space-backend.vercel.app/scrape",
        {
          // mode: "no-cors",
          method: "POST",
          body: JSON.stringify({ url: URL }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).catch((e) => console.log(e));
      const data = await response.json();
      console.log(data);
      setWebData(data);
      setLoading(false);
    }

    simplyfyArticle();
  }, [URL]);
  return (
    <>
      <div className="p-[3px] font-semibold text-base text-primary grid grid-cols-10 border-b-2">
        <Button onClick={backHandler}>&larr;</Button>
        <h1 className="col-span-8 text-center pt-[8px]">{params.article}</h1>
      </div>
      <div className="overflow-y-auto overflow-x-hidden h-[20rem] w-[25rem]">
        <div>
          {loading ? (
            <div className="h-full mx-10 font-semibold flex justify-center items-center ">
              Loading...
            </div>
          ) : webData ? (
            <div
              className="break-normal mx-4 my-2"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(webData) }}
            />
          ) : (
            <div>No Data Found</div>
          )}
        </div>
      </div>
    </>
  );
}
export default SimplifiedArticle;
