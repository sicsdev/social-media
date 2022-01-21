import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";

const SocialIcons = ({
  pageCount,
  setPageCount,
  socialType,
  setSocialType,
}) => {
  const [socialIcon, setSocialIcon] = useState(true);
  function handleCount() {
    setPageCount(pageCount + 1);
    if (socialIcon) {
      setSocialType("instagram");
    } else {
      setSocialType("tiktok");
    }
  }
  return (
      <div className="card">
        <div className="card-body">
          <img src="../../dummy-logo.png" alt="img" />
          <div className="form-modal">
            <div className="form-toggle">
              <button
                className={socialIcon ? "insta-btn active" : "insta-btn"}
                onClick={(e) => {
                  setSocialIcon(true);
                }}
              >
                <FaInstagram />
                {""} InstaGram
              </button>
              <button
                className={!socialIcon ? "ticktok-btn active" : "ticktok-btn"}
                onClick={(e) => {
                  setSocialIcon(false);
                }}
              >
                <FaTiktok />
                {""} TikTok
              </button>
            </div>
            <div className="social-media-wrapper">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCount}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SocialIcons;
