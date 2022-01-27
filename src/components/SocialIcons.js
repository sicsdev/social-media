import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const SocialIcons = ({
  pageCount,
  setPageCount,
  socialType,
  setSocialType,
}) => {
  const [socialIcon, setSocialIcon] = useState(true);
  function handleCount(social_type) {
    setPageCount(pageCount + 1);
    setSocialIcon(social_type);
    if (social_type) {
      setSocialType("instagram");
    } else {
      setSocialType("tiktok");
    }
  }
  return (
    <div className="card">
      <div className="card-body">
        <Logo />
        <div className="form-modal">
          <div className="form-toggle service-categories">
            <div className="row">
              <div className="col-md-6">
                <Link
                  to="#"
                  className={
                    socialIcon ? "icons-wrapper active" : "icons-wrapper"
                  }
                  onClick={(e) => {
                    handleCount(true);
                  }}
                >
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
              <div className="col-md-6">
                <Link
                  to="#"
                  className={
                    !socialIcon ? "icons-wrapper active" : "icons-wrapper"
                  }
                  onClick={(e) => {
                    handleCount(false);
                  }}
                >
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
          
          </div>
          {/* <div className="social-media-wrapper pt-5">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCount}
            >
              Next
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
