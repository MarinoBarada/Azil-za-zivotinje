import React from "react";
import { useForm } from "react-hook-form";
import style from "./AddDonation.module.css";
import * as azilDataAPI from "../../api/azilData";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userTypeContext from "../../context/userTypeContext";

function AddDonation() {
  const navigate = useNavigate();
  const admin = useContext(userTypeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { vrijednost: 1, opis: "" } });

  const onSubmit = async (data) => {
    const toSend = {
      tip: data.tip,
      kategorija: admin ? "trazi" : "nudi",
      vrijednost: data.vrijednost,
      opis: data.opis,
    };
    await azilDataAPI.createDonation(toSend);

    window.alert("Uspješno ste unjeli novu donaciju");
    navigate("/donacije");
  };

  return (
    <>
      <form
        className={style["donation-form"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Unos Donacije</h1>
        <select
          {...register("tip", {
            required: true,
          })}
        >
          <option value="">--Izaber Tip--</option>
          <option value="hrana">Hrana</option>
          <option value="lijekovi">Lijekovi</option>
          <option value="igracke">Igračke</option>
          <option value="vet-troskovi">Vet. troškovi</option>
        </select>
        {errors.tip?.type === "required" && <span>Tip je obavezan.</span>}
        <input type="number" min={1} {...register("vrijednost")} />
        <textarea rows={5} cols={30} placeholder="Opis" {...register("opis")} />
        <button type="submite">Spremi</button>
      </form>
    </>
  );
}

export default AddDonation;
