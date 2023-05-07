import React from "react";
import style from "./SocialIcons.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function SocialIcons({color}) {
  return (
    <div className={style["social-icons"]}>
      <a href="https://www.facebook.com/" target="_blank">
        <FaFacebookSquare size="5rem" color={color} />
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <FaLinkedin size="5rem" color={color} />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <FaInstagram size="5rem" color={color} />
      </a>
    </div>
  );
}

export default SocialIcons;
