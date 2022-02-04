import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { saveAs } from "file-saver";
import Logo from "./Logo";
import { FaCheck } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileSaver from "file-saver";

const ViewVideos = ({
  pageCount,
  setPageCount,
  viewVideosData,
  socialType,
}) => {
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
  };
  const downloadVideoHandler = (e) => {
    if (storeVideoUrls.length !== 0) {
      for (let index = 0; index < storeVideoUrls.length; index++) {
        let url = `${storeVideoUrls[index].video_url}`;
        // FileSaver.saveAs(url, "filemp4.mp4");
        downloadFiles(index, url);
      }
      toast.success("Selected Videos downloaded Successfully!", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const downloadFiles = (i, url) => {
    setTimeout(function () {
      FileSaver.saveAs(url, "filemp4.mp4");
    }, 3000 * i);
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <Logo />
          <div className="form-modal view-videos-wrapper">
            <div className="form-toggle">
              <div className="row view-video-wrapper-ul">
                {viewVideosData.length !== 0
                  ? viewVideosData.map((video, key) => (
                      <div className="col-md-4 mb-2" key={key}>
                        {selectedSym && selectedSym.includes(video.post_id) ? (
                          <div className="success-mark">
                            <FaCheck />
                          </div>
                        ) : (
                          ""
                        )}
                        {socialType === "instagram" ? (
                          <img
                            crossOrigin="anonymous"
                            src={`${video.cover}`}
                            src={`data:image/png;base64,${video.cover}`}
                            onClick={(e) => {
                              selectVideoHandler(
                                video.post_id,
                                video.download_url
                              );
                            }}
                            alt="img"
                            className="img-responsive"
                          />
                        ) : (
                          <img
                            src={video.cover[0]}
                            onClick={(e) => {
                              selectVideoHandler(
                                video.post_id,
                                video.video_url[0]
                              );
                            }}
                            alt="img"
                            className="img-responsive"
                          />
                        )}
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
      <ToastContainer />
    </>
  );
};

export default ViewVideos;
