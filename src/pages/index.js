import React from "react";
import SocialIcons from "../components/SocialIcons";
import SocialUser from "../components/SocialUser";
import { useState } from "react";
import ViewVideos from "../components/ViewVideos";

const Social = () => {
  const [pageCount, setPageCount] = useState(1);
  const [socialType, setSocialType] = useState("instagram");
  const [viewVideosData, setViewVideosData] = useState([]);

  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
            {pageCount === 1 && (
              <SocialIcons
                pageCount={pageCount}
                setPageCount={setPageCount}
                socialType={socialType}
                setSocialType={setSocialType}
              />
            )}
            {pageCount === 2 && (
              <SocialUser
                pageCount={pageCount}
                setPageCount={setPageCount}
                socialType={socialType}
                setViewVideosData={setViewVideosData}
                viewVideosData={viewVideosData}
              />
            )}

            {pageCount === 3 && (
              <ViewVideos
                pageCount={pageCount}
                setPageCount={setPageCount}
                viewVideosData={viewVideosData}
                socialType={socialType}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
