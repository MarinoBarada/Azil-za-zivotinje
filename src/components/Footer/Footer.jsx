import React from "react";
import { useContext } from "react";
import style from "./Footer.module.css";
import CustomLink from "../CustomLink/CustomLink";
import SocialIcons from "../SocialIcons/SocialIcons";
import userTypeContext from "../../context/userTypeContext";


function Footer() {
  const checked = useContext(userTypeContext);
  return (
    <footer className={style["footer"]}>
      <div className={style["wrapper"]}>
        <SocialIcons color="white"/>
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
