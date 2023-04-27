import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import MenuIcon from "../../icons/MenuAlt4.svg"
import CloseIcon from "../../icons/close.svg"
import { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";


function Navbar({ checked, action }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className={style["nav"]}>
        <div className={style["wrapper"]}>
          <Link to="/" className={style["site-title"]}>
            AzilSplit
          </Link>
          <ul>
            <CustomLink to="/" style={style}>O nama</CustomLink>
            <CustomLink to="/zivotinje" style={style}>Životinje</CustomLink>
            <CustomLink to="/donacije" style={style}>Donacije</CustomLink>
            <CustomLink to="/obavijesti" style={style}>Obavijesti</CustomLink>
            {checked && (
              <CustomLink to="/unosZivotinja" style={style}>Unos životinja</CustomLink>
            )}
            <label className={style["toggle"]}>
              <input
                type="checkbox"
                name="admin"
                onChange={action}
                checked={checked}
              />
              <span className={style["slider"]}></span>
            </label>
            <p>ADMIN</p>
          </ul>
        </div>
      </nav>

      <nav className={style["mobile-nav"]}>
        <div className={style["wrapper"]}>
          <Link to="/" className={style["site-title"]}>
            AzilSplit
          </Link>
          <div className={style["menu-icon"]}>
            <img src={MenuIcon} alt="" onClick={handleClick} />
          </div>
        </div>
      </nav>

      <div className={active ? `${style["mobile-menu-container"]} ${style["active"]}` : style["mobile-menu-container"]}>
        <div className={style["close-icon"]}>
          <img src={CloseIcon} alt="" onClick={handleClick}/>
        </div>
        <ul>
          <CustomLink to="/" style={style} onClick={handleClick}>O nama</CustomLink>
          <CustomLink to="/zivotinje" style={style} onClick={handleClick}>Životinje</CustomLink>
          <CustomLink to="/donacije" style={style} onClick={handleClick}>Donacije</CustomLink>
          <CustomLink to="/obavijesti" style={style} onClick={handleClick}>Obavijesti</CustomLink>
          {checked && (
            <CustomLink to="/unosZivotinja" style={style} onClick={handleClick}>Unos životinja</CustomLink>
          )}
          <label className={style["toggle"]}>
            <input
              type="checkbox"
              name="admin"
              onChange={action}
              checked={checked}
            />
            <span className={style["slider"]}></span>
          </label>
          <p>ADMIN</p>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
