import React from "react";

const ViewVideos = ({ pageCount, setPageCount, viewVideosData }) => {
  console.log("asd: ", viewVideosData);
  return (
    <>
      <div className="card">
        <div className="card-body">
            <img src="../../dummy-logo.png" alt="img" />
          <div className="form-modal view-videos-wrapper">
            <div className="form-toggle">
              <div className="row">
                {viewVideosData.length !== 0
                  ? viewVideosData.map((video, key) => (
                      <div className="col-md-4" key={key}>
                        <div className="thumbnail">
                          <img
                            src={video.cover[0]}
                            alt="img"
                            className="img-responsive"
                          />
                        </div>
                      </div>
                    ))
                  : "No Videos Found!"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewVideos;
