import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar({ checked, action }) {
  return (
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
          {checked && <CustomLink to="/unosZivotinja">Unos životinja</CustomLink>}
          <label className={style["toggle"]}>
            <input type="checkbox" name="admin" onChange={action} 
            checked={checked}/>
            <span className={style["slider"]}></span>
          </label>
          <p>ADMIN</p>
        </ul>
      </div>
    </nav>
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
