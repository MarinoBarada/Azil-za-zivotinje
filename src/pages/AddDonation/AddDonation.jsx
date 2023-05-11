import React from "react";
import { useForm } from "react-hook-form";
import style from "../../style/Form.module.css";
import * as azilDataAPI from "../../api/azilData";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userTypeContext from "../../context/userTypeContext";
import Swal from "sweetalert2";

function AddDonation() {
  const navigate = useNavigate();
  const admin = useContext(userTypeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { opis: "" } });

  const onSubmit = async (data) => {
    const toSend = {
      tip: data.tip,
      kategorija: admin ? "trazi" : "nudi",
      vrijednost: data.vrijednost,
      opis: data.opis,
    };
    await azilDataAPI.createDonation(toSend);

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Uspješno ste unjeli novu donaciju",
    });
    navigate("/donacije");
  };

  return (
    <>
      <form className={style["form"]} onSubmit={handleSubmit(onSubmit)}>
        <h1>Unos Donacije</h1>
        <div className={style["container-input"]}>
          <p>Tip:</p>
          <select
            {...register("tip", {
              required: true,
            })}
          >
            <option value="">--Izaber Tip--</option>
            <option value="Hrana">Hrana</option>
            <option value="Lijekovi">Lijekovi</option>
            <option value="Igracke">Igračke</option>
            <option value="Vet-troskovi">Vet. troškovi</option>
            <option value="Ostalo">Ostalo</option>
          </select>
          {errors.tip?.type === "required" ? (
            <span>Tip je obvezan.</span>
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
        <div className={style["container-input"]}>
          <p>Novčana vrijednost u eurima (€):</p>
          <input
            type="number"
            min={1}
            {...register("vrijednost", {
              required: true,
            })}
          />
          {errors.vrijednost?.type === "required" ? (
            <span>Vrijednost je obvezna.</span>
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
        <div className={style["container-input"]}>
          <p>Opis:</p>
          <textarea
            rows={5}
            cols={30}
            placeholder="Opis"
            {...register("opis")}
          />
        </div>
        <div className={style["container-input"]}>
          <button type="submite">Spremi</button>
        </div>
      </form>
    </>
  );
}

export default AddDonation;
