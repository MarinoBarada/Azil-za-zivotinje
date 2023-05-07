import React, { useContext } from "react";
import style from "./Notification.module.css";
import userTypeContext from "../../context/userTypeContext";
import { FaTrash } from "react-icons/fa";

function Notification({ note, handleDelete }) {
  const admin = useContext(userTypeContext);
  return (
    <div
      className={
        note.vazno
          ? `${style["container"]} ${style["important"]}`
          : style["container"]
      }
    >
      {note.vazno && <h2>VAŽNO!</h2>}
      <h1>{note.naslov}</h1>
      <h3>{note.datum}</h3>
      <p>{note.tekst}</p>
      {admin && (
        <button onClick={() => handleDelete(note.id)}>
          <abbr title="Izbriši">
            <FaTrash size="3rem" color="red" />
          </abbr>
        </button>
      )}
    </div>
  );
}

export default Notification;
