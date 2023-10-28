import React from "react";
import { ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function SocialHandle() {
  return (
    <>
      <div className="socialPlatform">
        <div className="background-shadow">
          <div className="heading" data-aos="fade-up">
            <h3 data-aos="fade-left">FIND ME ON</h3>
            <div className="subheading">
              Feel Free to <span id="span-connect"> Connect </span> with me.
            </div>
            <div className="social-icon">
              <a href="https://github.com/Hassanjavaid1" target="_blank">
                {" "}
                <ImGithub id="icon" />
              </a>
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
              >
                <BsLinkedin id="icon" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61551678367934"
                target="_blank"
              >
                {" "}
                <BsFacebook id="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
