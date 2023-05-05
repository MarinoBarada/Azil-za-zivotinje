import React from "react";
import style from "./AddEditAnimal.module.css";
import { useForm } from "react-hook-form";
import * as azilDataAPI from "../../api/azilData";
import { useNavigate } from "react-router-dom";

function AddEditAnimal() {
  const navigate = useNavigate();
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      godine: 1,
      opis: "",
      cip: false,
      vrsta: "pas",
      udomljen: false,
    },
  });

  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;

  const onSubmit = async (data) => {
    await azilDataAPI.createAnimal(data);

    window.alert("Uspješno ste unjeli novu životinju");
    navigate("/zivotinje");
  };

  return (
    <>
      <form className={style["animal-form"]} onSubmit={handleSubmit(onSubmit)}>
        <h1>Unos Životinje</h1>
        <input
          type="text"
          placeholder="Ime"
          {...register("ime", {
            required: true,
          })}
        />
        {errors.ime?.type === "required" && <span>Ime je obavezan.</span>}
        <div className={style["radio-inputs"]}>
          <div className={style["radio-input"]}>
            <input type="radio" value="pas" {...register("vrsta")} />
            <label>Pas</label>
          </div>
          <div className={style["radio-input"]}>
            <input type="radio" value="mačka" {...register("vrsta")} />
            <label>Mačka</label>
          </div>
          <div className={style["radio-input"]}>
            <input type="radio" value="ostalo" {...register("vrsta")} />
            <label>Ostalo</label>
          </div>
        </div>
        <input type="number" min={1} {...register("godine")} />
        <div className={style["checkbox-input"]}>
          <input type="checkbox" {...register("cip")} />
          <label>Čipiran</label>
        </div>
        <input
          type="date"
          max={formattedDate}
          {...register("pregled", {
            required: true,
          })}
        />
        {errors.pregled?.type === "required" && (
          <span>Datum pregleda je obavezan.</span>
        )}
        <input
          type="text"
          placeholder="URL slike"
          {...register("slika", {
            required: true,
          })}
        />
        {errors.slika?.type === "required" && (
          <span>URL slike je obavezan.</span>
        )}
        <textarea rows={5} cols={30} placeholder="Opis" {...register("opis")} />
        <button type="submite">Spremi</button>
      </form>
    </>
  );
}

export default AddEditAnimal;
