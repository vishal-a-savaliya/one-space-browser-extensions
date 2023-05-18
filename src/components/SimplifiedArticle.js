import React, { useCallback, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Button from "./UIComponents/Button";
import { useEffect } from "react";

function SimplifiedArticle(props) {
  const [webData, setWebData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  function backHandler(e) {
    navigate(-1);
  }
  const URL = location.state.url;
  console.log(URL);

  const simplyfyArticle = useCallback(async () => {
    setLoading(true);
    try {
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
      );
      const data = await response.json();
      console.log(data);
      setWebData(data.html);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [URL]);
  useEffect(() => {
    simplyfyArticle();
  }, [simplyfyArticle]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 5000);
  });
  return (
    <>
      <div className="p-[3px] font-semibold text-base text-primary grid grid-cols-10 border-b-2">
        <Button onClick={backHandler}>&larr;</Button>
        {/* <h1 className="col-span-8 text-center pt-[8px]">{params.article}</h1> */}
      </div>
      <div className="overflow-y-auto overflow-x-hidden h-[20rem] w-[25rem]">
        <div>
          {loading ? (
            <div className="text-center my-5 font-semibold ">Loading...</div>
          ) : !error ? (
            <div>
              <h1 className="col-span-8 text-left py-2">{params.article}</h1>
              <div
                className="break-normal mx-4 my-2"
                dangerouslySetInnerHTML={{ __html: webData }}
              />
            </div>
          ) : (
            <div className="text-center my-10 font-semibold">No Data Found</div>
          )}
        </div>
      </div>
    </>
  );
}
export default SimplifiedArticle;
