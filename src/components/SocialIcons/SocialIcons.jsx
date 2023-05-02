import React from "react";
import { Link } from "react-router-dom";
import style from "./SocialIcons.module.css";
import FacebookIcon from "../../icons/Facebook.svg";
import InsatgramIcon from "../../icons/instagram.svg";

function SocialIcons() {
  return (
    <div className={style["social-icons"]}>
      <Link to="/">
        <div className={style["social-icon"]}>
          <img src={FacebookIcon} alt="facebook" />
        </div>
      </Link>
      <Link to="/">
        <div className={style["social-icon"]}>
          <img src={InsatgramIcon} alt="instagram" />
        </div>
      </Link>
    </div>
  );
}

export default SocialIcons;
