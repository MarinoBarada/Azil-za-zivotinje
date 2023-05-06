import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import style from "../../style/Form.module.css";
import userTypeContext from "../../context/userTypeContext";
import * as azilDataAPI from "../../api/azilData";
import { useNavigate } from "react-router-dom";

function AddNotification() {
  const navigate = useNavigate();
  const admin = useContext(userTypeContext);
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { vazno: false } });

  const onSubmit = async (data) => {
    const toSend = {
      naslov: data.naslov,
      datum: formattedDate,
      tekst: data.tekst,
      vazno: data.vazno,
    };
    await azilDataAPI.createNotification(toSend);

    window.alert("Uspješno ste unjeli novu obavijest.");
    navigate("/obavijesti");
  };

  return (
    <>
      <form className={style["form"]} onSubmit={handleSubmit(onSubmit)}>
        <h1>Unos Obavijesti</h1>
        <div className={style["container-input"]}>
          <p>Naslov:</p>
          <input
            type="text"
            placeholder="Naslov"
            {...register("naslov", {
              required: true,
              maxLength: 20,
            })}
          />
          {errors.naslov?.type === "required" && (
            <span>Naslov je obvezan.</span>
          ) }
          {errors.naslov?.type === "maxLength" && (
            <span>Naslov mora biti kraći od 20 znakova.</span>
          )}
        </div>
        <div className={style["container-input"]}>
          <p>Opis:</p>
          <textarea
            rows={5}
            cols={30}
            placeholder="Text"
            {...register("tekst", {
              required: true,
              minLength: 10,
              maxLength: 200,
            })}
          />
          {errors.tekst?.type === "required" && <span>Tekst je obvezan.</span> }
          {errors.tekst?.type === "minLength" && (
            <span>Tekst najmanje treba sadržati 10 znakova.</span>
          )}
          {errors.tekst?.type === "maxLength" && (
            <span>Text najviše treba sadržati 200 znakova.</span>
          )}
        </div>
        {admin && (
          <div className={style["container-input"]}>
            <div className={style["checkbox-input"]}>
              <input type="checkbox" {...register("vazno")} />
              <label>Važno</label>
            </div>
          </div>
        )}
        <div className={style["container-input"]}>
          <button type="submite">Spremi</button>
        </div>
      </form>
    </>
  );
}

export default AddNotification;
