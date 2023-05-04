import React, { useContext } from "react";
import style from "./Notification.module.css";
import userTypeContext from "../../context/userTypeContext";

function Notification({ note , handleDelete}) {
  const admin = useContext(userTypeContext);
  return (
    <div className={style["container"]}>
      {note.vazno && <h2>VAŽNO!</h2>}
      <h1>{note.naslov}</h1>
      <h3>{note.datum}</h3>
      <p>{note.tekst}</p>
      {admin && <button onClick={() => handleDelete(note.id)}>DELETE</button>}
    </div>
  );
}

export default Notification;
