import React from "react";
import style from "./NotificationContainer.module.css";
import { Link } from "react-router-dom";

function NotificationContainer(props) {
  return (
    <>
      <div className={style["container"]}>
        <Link to={"/obavijesti/unosObavijesti"} className={style["new-note-button"]}>Nova Obavijest</Link>
        <h1>Obavijesti</h1>
      </div>
      <div className={style["notifications"]}>{props.children}</div>
    </>
  );
}

export default NotificationContainer;
