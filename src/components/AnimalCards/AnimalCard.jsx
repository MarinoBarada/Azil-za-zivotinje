import React from "react";
import style from "./AnimalCard.module.css";
import { useContext } from "react";
import userTypeContext from "../../context/userTypeContext";

function AnimalCard({animals, load}) {
  const admin = useContext(userTypeContext);

  return (
    <div className={style["card"]}>
      <div className={style["card-image"]}>
        <img src={animals.slika} />
      </div>
      <div className={style["card-info"]}>
        <h2>{animals.ime}</h2>
        <div className={style["more-info"]}>
          <p>Vrsta: {animals.vrsta}</p>
          <p>Status: {animals.udomljen ? ("Udomljen/udomljena") : ("NIJE udomljen/udomljena")}</p>
          <p>Opis: {animals.opis}</p>
          <div className={style["buttons"]}>
            <button>Udomi</button>
            {admin && <button>Uredi</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalCard;
