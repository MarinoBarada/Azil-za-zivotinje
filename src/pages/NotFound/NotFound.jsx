import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./NotFound.module.css";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 1500);
  }, []);
  return (
    <div className={style["not-found-container"]}>
      <h1>STRANICA NIJE PRONAĐENA</h1>;
    </div>
  );
}

export default NotFound;
