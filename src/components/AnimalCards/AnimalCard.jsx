import React from "react";
import style from "./AnimalCard.module.css";
import { useContext } from "react";
import userTypeContext from "../../context/userTypeContext";
import * as azilDataAPI from "../../api/azilData";
import { Link } from "react-router-dom";

function AnimalCard({ animals, load }) {
  const admin = useContext(userTypeContext);

  const changeAdoption = async (id) => {
    const response = await azilDataAPI.updateAnimals(id);
    if (response.status === 200) load();
  };

  return (
    <div className={animals.udomljen ? `${style["card"]} ${style["adopted"]}` : style["card"]}>
      <div className={style["card-image"]}>
        <img src={animals.slika} />
      </div>
      <div className={style["card-info"]}>
        <h2>{animals.ime}</h2>
        <div className={style["more-info"]}>
          <p>Vrsta: {animals.vrsta}</p>
          <p>
            Status:{" "}
            {animals.udomljen
              ? "Udomljen/udomljena"
              : "NIJE udomljen/udomljena"}
          </p>
          <p>Godine: {animals.godine}</p>
          <p>Pregled: {animals.pregled}</p>
          <p>Opis: {animals.opis}</p>
          {animals.udomljen && <h3>UDOMLJEN</h3>}
          <div className={style["buttons"]}>
            {!animals.udomljen && <button onClick={() => changeAdoption(animals.id)}>Udomi</button>}
            {admin && <Link to={`/editiranjeZivotinja/${animals.id}`} state={{data: animals}}><button>Uredi</button></Link>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalCard;
