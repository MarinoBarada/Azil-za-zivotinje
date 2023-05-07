import React from "react";
import style from "./Donations.module.css";
import { useContext } from "react";
import userTypeContext from "../../context/userTypeContext";
import * as azilDataAPI from "../../api/azilData";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

function TableRow({ donation, load }) {
  const admin = useContext(userTypeContext);

  const changeCategory = async (id, category) => {
    const response = await azilDataAPI.updateDonation(id, category);
    if (response.status === 200) load();
  };

  const deleteDonation = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Jeste li sigurni da želite izbrisati ovu donaciju?",
        text: "Ovo nećete moći vratiti!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Da, izbriši!",
        preConfirm: async () => {
          const response = await azilDataAPI.deleteDonation(id);
          if (response.status === 200) {
            return true;
          } else {
            throw new Error("There was an error deleting the notification.");
          }
        },
      });

      if (result.isConfirmed) {
        Swal.fire("Izbrisano!", "Donacija je izbrisana.", "success");
        load();
      }
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Greška",
        "Došlo je do pogreške prilikom brisanja donacije.",
        "error"
      );
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
