import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";

const ViewVideos = ({ pageCount, setPageCount, viewVideosData }) => {
  let [storeVideoUrls, setStoreVideoUrls] = useState([]);
  const [selectedSym, setSelectedSym] = useState([]);
  const selectVideoHandler = (val, video_url) => {
    const findData = storeVideoUrls.find((x) => x.id == val);
    if (findData) {
      const findIndex = storeVideoUrls.indexOf(findData);
      if (findIndex != -1) {
        const deleteData = storeVideoUrls.splice(findIndex, 1);
        let data = [...selectedSym];
        let ind = data.indexOf(val);
        data.splice(ind, 1);
        setSelectedSym(data);
      }
    } else {
      let payload = {
        id: val,
        video_url: video_url,
      };
      storeVideoUrls.push(payload);
      setSelectedSym((selectedSym) => {
        return [...selectedSym, val];
      });
    }
    console.log("asd: ", storeVideoUrls);
  };
  const downloadVideoHandler = (e) => {
    if (storeVideoUrls.length !== 0) {
      for (let index = 0; index < storeVideoUrls.length; index++) {
        let url = `${storeVideoUrls[index].video_url}`;
        saveAs(url, "filemp4");
      }
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <Link to="/">
            <img src="../../dummy-logo.png" alt="img" />
          </Link>
          <div className="form-modal view-videos-wrapper">
            <div className="form-toggle">
              <div className="row view-video-wrapper-ul">
                {viewVideosData.length !== 0
                  ? viewVideosData.map((video, key) => (
                      <div className="col-md-4" key={key}>
                        <input type="checkbox" id={`cb${key}`} />
                        <label htmlFor={`cb${key}`}>
                          <img
                            src={video.cover[0]}
                            onClick={(e) => {
                              selectVideoHandler(
                                video.post_id,
                                video.video_url[0]
                              );
                            }}
                            alt="img"
                            className={
                              selectedSym && selectedSym.includes(video.post_id)
                                ? "img-responsive selected"
                                : "img-responsive non"
                            }
                          />
                        </label>
                      </div>
                    ))
                  : "No Videos Found!"}
              </div>
            </div>
            <div className="social-media-wrapper">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  downloadVideoHandler();
                }}
              >
                DOWNLOAD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewVideos;
