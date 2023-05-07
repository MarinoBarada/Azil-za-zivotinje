import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { useState, useContext } from "react";
import CustomLink from "../CustomLink/CustomLink";
import userTypeContext from "../../context/userTypeContext";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function Navbar({ action }) {
  const [active, setActive] = useState(false);
  const checked = useContext(userTypeContext);

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
            <CustomLink to="/" style={style}>
              O nama
            </CustomLink>
            <CustomLink to="/zivotinje" style={style}>
              Životinje
            </CustomLink>
            <CustomLink to="/donacije" style={style}>
              Donacije
            </CustomLink>
            <CustomLink to="/obavijesti" style={style}>
              Obavijesti
            </CustomLink>
            {checked && (
              <CustomLink to="/unosZivotinja" style={style}>
                Unos životinja
              </CustomLink>
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
          <FaBars
            size="3.5rem"
            color="white"
            onClick={handleClick}
            className={style["icon"]}
          />
        </div>
      </nav>

      <div
        className={
          active
            ? `${style["mobile-menu-container"]} ${style["active"]}`
            : style["mobile-menu-container"]
        }
      >
        <FaTimes
          size="4rem"
          color="white"
          onClick={handleClick}
          className={style["close-icon"]}
        />
        <ul>
          <CustomLink to="/" style={style} onClick={handleClick}>
            O nama
          </CustomLink>
          <CustomLink to="/zivotinje" style={style} onClick={handleClick}>
            Životinje
          </CustomLink>
          <CustomLink to="/donacije" style={style} onClick={handleClick}>
            Donacije
          </CustomLink>
          <CustomLink to="/obavijesti" style={style} onClick={handleClick}>
            Obavijesti
          </CustomLink>
          {checked && (
            <CustomLink to="/unosZivotinja" style={style} onClick={handleClick}>
              Unos životinja
            </CustomLink>
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
