import React from "react";
import style from "./AboutUs.module.css";
import Image from "../../images/about.jpg";

function AboutUs() {
  return (
    <>
      <div className={style["about-container"]}>
        <div className={style["info-container"]}>
          <h1>O nama</h1>
          <p>
            Naše sklonište je posvećeno pružanju sigurnog i udobnog utočišta za
            životinje u potrebi. Neumorno radimo kako bismo osigurali da svaka
            životinja koja uđe kroz naša vrata dobije ljubav, brigu i pažnju
            koju zaslužuje. Naš tim posvećenog osoblja i volontera strastveni su
            za dobrobit životinja i predani su pronalaženju zauvijek domova za
            sve naše krznene prijatelje. U našem skloništu nastojimo stvoriti
            pozitivno i poticajno okruženje u kojem životinje mogu napredovati i
            gdje ljudi mogu doći pronaći svog savršenog suputnika.
          </p>
        </div>
        <div className={style["image-container"]}>
          <img src={Image} />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
