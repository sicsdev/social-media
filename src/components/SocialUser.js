import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import axiosConfig from "../base_url/config";
import Loader from "./Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <img src="../../dummy-logo.png" alt="img" />
          <div className="form-modal">
            <div className="form-toggle">
              {socialType === "instagram" ? (
                <button className="insta-btn active">
                  <FaInstagram />
                  {""} InstaGram
                </button>
              ) : (
                <button className="ticktok-btn active">
                  <FaTiktok />
                  {""} TikTok
                </button>
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
