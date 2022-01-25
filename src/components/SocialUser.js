import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import axiosConfig from "../base_url/config";
import Loader from "./Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const SocialUser = ({
  pageCount,
  setPageCount,
  socialType,
  viewVideosData,
  setViewVideosData,
}) => {
  const [socialUserName, setSocialUserName] = useState("");
  const [tikTokVideosData, setTikTokVideosData] = useState([]);
  const [loader1, setloader1] = useState(false);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const getTiktokVideosHandler = async (e) => {
    e.preventDefault();
    setloader1(true);
    try {
      const { data } = await axiosConfig.post(
        "/tiktok-videos",
        {
          username: socialUserName,
        },
        config
      );
      setloader1(false);
      if (data && data.videos && !data.videos.Exception) {
        setViewVideosData(data.videos);
        setPageCount(pageCount + 1);
      } else {
        setViewVideosData([]);
        return toast.error("Wrong Username/ Account is not public!", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      setViewVideosData([]);
      setloader1(false);
      return toast.error("Unable to fetch TikTok Videos!", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <Link to="/">
            <img src="../../dummy-logo.png" alt="img" />
          </Link>
          <div className="form-modal">
            <div className="form-toggle service-categories">
              {socialType === "instagram" ? (
                <div className="row justify-content-center pb-2">
                  <div className="col-md-6">
                    <Link to="#" className="icons-wrapper active">
                      <div className="card service-card card-inverse">
                        <div className="card-block">
                          <span className="social-icon">
                            <img src="../../insta-icon.png" />
                          </span>
                          <h4 className="card-title">Instagram</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="row justify-content-center pb-2">
                  <div className="col-md-6">
                    <Link to="#" className="icons-wrapper active">
                      <div className="card service-card card-inverse">
                        <div className="card-block">
                          <span className="social-icon">
                            <img src="../../tiktok-icon.png" />
                          </span>
                          <h4 className="card-title">TikTok</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="social-media-wrapper">
              {socialType === "tiktok" ? (
                <form
                  onSubmit={(e) => {
                    getTiktokVideosHandler(e);
                  }}
                >
                  <input
                    type="text"
                    value={socialUserName}
                    onChange={(e) => setSocialUserName(e.target.value)}
                    className="form-control"
                    placeholder="Enter UserName..."
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Next
                  </button>
                </form>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      {loader1 === true ? <Loader /> : <></>}
      <ToastContainer />
    </>
  );
};

export default SocialUser;
