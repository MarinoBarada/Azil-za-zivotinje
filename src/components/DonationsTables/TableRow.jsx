import React from "react";
import style from "./Donations.module.css";
import { useContext } from "react";
import userTypeContext from "../../context/userTypeContext";
import * as azilDataAPI from "../../api/azilData";
import { FaTrash } from "react-icons/fa";

function TableRow({ donation, load }) {
  const admin = useContext(userTypeContext);

  const changeCategory = async (id, category) => {
    const response = await azilDataAPI.updateDonation(id, category);
    if (response.status === 200) load();
  };

  const deleteDonation = async (id) => {
    if (window.confirm("Jeste li sigurni da želite izbrisati ovu donaciju?")) {
      const response = await azilDataAPI.deleteDonation(id);
      if (response.status === 200) load();
    }
  };

  return (
    <tr className={style["row"]}>
      <td>{donation.tip}</td>
      <td>{donation.vrijednost} €</td>
      <td>{donation.opis}</td>
      <td className={style["options"]}>
        {admin && donation.kategorija === "trazi" ? (
          <>
            <button onClick={() => changeCategory(donation.id, "donirano")}>
              Donirano
            </button>
            <button
              className={style["delete"]}
              onClick={() => deleteDonation(donation.id)}
            >
              <abbr title="Izbriši">
                <FaTrash size="3rem" color="red" />
              </abbr>
            </button>
          </>
        ) : (
          donation.kategorija === "trazi" && (
            <button onClick={() => changeCategory(donation.id, "donirano")}>
              Doniraj
            </button>
          )
        )}
        {admin && donation.kategorija === "nudi" ? (
          <button onClick={() => changeCategory(donation.id, "donirano")}>
            Prihvati
          </button>
        ) : (
          ""
        )}
        {admin && donation.kategorija === "donirano" ? (
          <>
            <button onClick={() => changeCategory(donation.id, "trazi")}>
              Ponovi
            </button>
            <button
              className={style["delete"]}
              onClick={() => deleteDonation(donation.id)}
            >
              <abbr title="Izbriši">
                <FaTrash size="3rem" color="red" />
              </abbr>
            </button>
          </>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
}

export default TableRow;
