import React, { useState, useEffect } from "react";
import style from "../../style/Form.module.css";
import { useForm } from "react-hook-form";
import * as azilDataAPI from "../../api/azilData";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function AddEditAnimal() {
  const { id } = useParams();
  const loction = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const animal = loction.state?.data;

  const navigate = useNavigate();
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const {
    register,
    handleSubmit,
    reset,
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

  useEffect(() => {
    if (animal) {
      reset(animal);
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [animal, reset]);

  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;

  const onSubmit = async (data) => {
    if (isEditing) {
      await azilDataAPI.editAnimals(id, data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Uspješno ste uredili informacije životinje",
      });
    } else {
      await azilDataAPI.createAnimal(data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Uspješno ste unjeli novu životinju",
      });
    }
    navigate("/zivotinje");
  };

  return (
    <>
      <form className={style["form"]} onSubmit={handleSubmit(onSubmit)}>
        {isEditing ? <h1>Editiranje Životinje</h1> : <h1>Unos Životinje</h1>}
        <div className={style["container-input"]}>
          <p>Ime:</p>
          <input
            type="text"
            placeholder="Ime"
            {...register("ime", {
              required: true,
            })}
          />
          {errors.ime?.type === "required" ? (
            <span>Ime je obvezno.</span>
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
        <div className={style["container-input"]}>
          <p>Vrsta:</p>
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
        </div>
        <div className={style["container-input"]}>
          <p>Godine:</p>
          <input type="number" min={1} {...register("godine")} />
        </div>
        <div className={style["container-input"]}>
          <div className={style["checkbox-input"]}>
            <input type="checkbox" {...register("cip")} />
            <label>Čipiran</label>
          </div>
        </div>
        <div className={style["container-input"]}>
          <p>Pregled:</p>
          <input
            type="date"
            max={formattedDate}
            {...register("pregled", {
              required: true,
            })}
          />
          {errors.pregled?.type === "required" ? (
            <span>Datum pregleda je obvezan.</span>
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
        {isEditing && (
          <div className={style["container-input"]}>
            <div className={style["checkbox-input"]}>
              <input type="checkbox" {...register("udomljen")} />
              <label>Udomljen</label>
            </div>
          </div>
        )}
        <div className={style["container-input"]}>
          <p>Slika (URL):</p>
          <input
            type="text"
            placeholder="URL slike"
            {...register("slika", {
              required: true,
            })}
          />
          {errors.slika?.type === "required" ? (
            <span>URL slike je obvezan.</span>
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

export default AddEditAnimal;
