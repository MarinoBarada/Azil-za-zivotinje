import React from "react";
import style from "./AnimalCard.module.css";
import { useContext } from "react";
import userTypeContext from "../../context/userTypeContext";
import * as azilDataAPI from "../../api/azilData";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";

function AnimalCard({ animals, load }) {
  const admin = useContext(userTypeContext);

  const changeAdoption = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Jeste li sigurni da želite udomiti ovu životinju?",
        text: "Ovo slatkicu nećete moći vratiti!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Da, udomi!",
        preConfirm: async () => {
          const response = await azilDataAPI.updateAnimals(id);
          if (response.status === 200) {
            return true;
          } else {
            throw new Error("There was an error adopting this animal.");
          }
        },
      });

      if (result.isConfirmed) {
        Swal.fire("Udomljeno!", `${animals.ime} je udomljen.`, "success");
        load();
      }
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Greška",
        "Došlo je do pogreške prilikom udomljavanja životinje.",
        "error"
      );
    }
  };

  return (
    <div
      className={
        animals.udomljen
          ? `${style["card"]} ${style["adopted"]}`
          : style["card"]
      }
    >
      <div className={style["card-image"]}>
        <img src={animals.slika} alt={animals.vrsta} />
      </div>
      <div className={style["card-info"]}>
        <h2>{animals.ime}</h2>
        <div className={style["more-info"]}>
          <p>Vrsta: {animals.vrsta}</p>
          <p>Godine: {animals.godine}</p>
          <p>Pregled: {animals.pregled}</p>
          <p>Čipiran: {animals.cip ? "Da" : "Ne"}</p>
          <p>Opis: {animals.opis}</p>
          <p>
            Status:{" "}
            {animals.udomljen ? (
              <h3>UDOMLJEN</h3>
            ) : (
              <p>NIJE udomljen/udomljena</p>
            )}
          </p>
          <div className={style["buttons"]}>
            {!animals.udomljen && (
              <button onClick={() => changeAdoption(animals.id)}>Udomi</button>
            )}
            {admin && (
              <Link
                to={`/editiranjeZivotinja/${animals.id}`}
                state={{ data: animals }}
              >
                <button className={style["edit"]}>
                  <FaRegEdit size="3rem" color="blue" />
                  Uredi
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalCard;
