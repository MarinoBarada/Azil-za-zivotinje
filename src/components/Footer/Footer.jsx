import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import style from "./Footer.module.css";
import FacebookIcon from "../../icons/Facebook.svg";
import InsatgramIcon from "../../icons/instagram.svg";
import CustomLink from "../CustomLink/CustomLink";

function Footer({ checked }) {
  return (
    <footer className={style["footer"]}>
      <div className={style["wrapper"]}>
        <div className={style["social-icons"]}>
          <Link to="/">
            <div className={style["social-icon"]}>
              <img src={FacebookIcon} alt="" />
            </div>
          </Link>
          <Link to="/">
            <div className={style["social-icon"]}>
              <img src={InsatgramIcon} alt="" />
            </div>
          </Link>
        </div>
        <ul className={style["links"]}>
            <CustomLink to="/" style={style}>O nama</CustomLink>
            <CustomLink to="/zivotinje" style={style}>Životinje</CustomLink>
            <CustomLink to="/donacije" style={style}>Donacije</CustomLink>
            <CustomLink to="/obavijesti" style={style}>Obavijesti</CustomLink>
            {checked && (
              <CustomLink to="/unosZivotinja" style={style}>Unos životinja</CustomLink>
            )}
        </ul>

        <div className={style["copyrights"]}>
            <p>Copyright © 2023 All rights reserved - AzilSplit</p>
            <p>Powered By EDIT Code School</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
