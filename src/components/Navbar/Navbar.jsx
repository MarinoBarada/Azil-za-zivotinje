import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import style from "./Navbar.module.css";
import MenuIcon from "../../icons/MenuAlt4.svg"
import CloseIcon from "../../icons/close.svg"
import { useState } from "react";


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
            <CustomLink to="/">O nama</CustomLink>
            <CustomLink to="/zivotinje">Životinje</CustomLink>
            <CustomLink to="/donacije">Donacije</CustomLink>
            <CustomLink to="/obavijesti">Obavijesti</CustomLink>
            {checked && (
              <CustomLink to="/unosZivotinja">Unos životinja</CustomLink>
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
          <CustomLink to="/" onClick={handleClick}>O nama</CustomLink>
          <CustomLink to="/zivotinje" onClick={handleClick}>Životinje</CustomLink>
          <CustomLink to="/donacije" onClick={handleClick}>Donacije</CustomLink>
          <CustomLink to="/obavijesti" onClick={handleClick}>Obavijesti</CustomLink>
          {checked && (
            <CustomLink to="/unosZivotinja" onClick={handleClick}>Unos životinja</CustomLink>
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

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? style["active"] : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
