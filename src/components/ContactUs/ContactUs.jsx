import React from "react";
import style from "./ContactUs.module.css";
import formStyle from "../../style/Form.module.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitSuccessful },
    formState,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("service_0uw3fc7", "template_63m3w5n", data, "l-dZlmML2M77PTfiH")
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Mejl poslan");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "", mobile: "", email: "", message: "" });
    }
  }, [formState, onSubmit, reset]);

  return (
    <>
      <div className={style["contact"]}>
        <h1>Pridružite nam se</h1>
        <div className={style["contact-container"]}>
          <div className={style["info-container"]}>
            <p>Split, Hrvatska</p>
            <p>
              <FaPhoneAlt size="2rem" color="#333" />{" "}
              <a href="tel:0919774088">+385-91-977-4088</a>
            </p>
            <p>
              <FaEnvelope size="2rem" color="#333" /> {""}
              <a href="mailto:marino18barada@gmail.com">
                marino18barada@gmail.com
              </a>
            </p>
            <SocialIcons color="#333" />
          </div>
          <form
            className={style["contact-form"]}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={formStyle["container-input"]}>
              <p>Ime i prezime:</p>
              <input
                type="text"
                placeholder="Ime Prezime"
                {...register("name", {
                  required: true,
                  minLength: 2,
                  pattern: /^[A-Z](?!\s)[a-z]*((\W)?[A-Z][a-z]+)*$/gm,
                })}
              />
              {errors.name?.type === "required" && (
                <span>Ime i prezime su obavezan.</span>
              )}
              {errors.name?.type === "minLength" && (
                <span>Ime i prezime mora biti duže od 2 slova.</span>
              )}
              {errors.name?.type === "pattern" && (
                <span>Ime i prezime sadržavaju samo velika i mala slova.</span>
              )}
            </div>
            <div className={formStyle["container-input"]}>
              <p>Broj mobitela:</p>
              <input
                type="tel"
                placeholder="Broj Mobitela"
                {...register("mobile", {
                  required: true,
                  pattern:
                    /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/g,
                })}
              />
              {errors.mobile?.type === "required" && (
                <span>Broj mobitela je obavezan.</span>
              )}
              {errors.mobile?.type === "pattern" && (
                <span>
                  Broj mobitela morao izgledati kao npr. +385-985-245-1730 ili
                  091 999 9999.
                </span>
              )}
            </div>
            <div className={formStyle["container-input"]}>
              <p>Email:</p>
              <input
                type="email"
                placeholder="Email adresa"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
              {errors.email?.type === "required" && (
                <span>Email je obavezan.</span>
              )}
              {errors.email?.type === "pattern" && (
                <span>Email mora izgledati npr. imeprezime@gmail.com</span>
              )}
            </div>
            <div className={formStyle["container-input"]}>
              <p>Poruka:</p>
              <textarea
                rows={5}
                cols={30}
                placeholder="Poruka"
                {...register("message", { required: true })}
              />
              {errors.message?.type === "required" && (
                <span>Poruka je obavezan.</span>
              )}
            </div>
            <div className={formStyle["container-input"]}>
              <button type="submite">Kontaktirajte nas</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
