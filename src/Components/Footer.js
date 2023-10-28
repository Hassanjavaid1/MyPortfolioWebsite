import React from "react";
import "./CSS/Footer.css";
import "./CSS/MediaHome.css";
import { ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="sub-footer">
          <div className="footer_icon">
            <a href="https://github.com/Hassanjavaid1" target="_blank">
              <ImGithub id="foot-icon" />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
            >
              <BsLinkedin id="foot-icon" />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61551678367934"
              target="_blank"
            >
              {" "}
              <BsFacebook id="foot-icon" />
            </a>
            <a
              href="https://www.fiverr.com/hassanjavaid121?up_rollout=true"
              target="_blank"
            >
              {" "}
              <TbBrandFiverr id="foot-icon" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01c469c95425efc4ca"
              target="_blank"
            >
              {" "}
              <SiUpwork id="foot-icon" />
            </a>
          </div>
          <div className="copy-right">
            <p>Copyright &copy; 2023</p>
          </div>
          <div className="footer-name">
            <p id="developer_name">Developed by Hassanjavaid!</p>
          </div>
        </div>
      </div>
    </>
  );
}
