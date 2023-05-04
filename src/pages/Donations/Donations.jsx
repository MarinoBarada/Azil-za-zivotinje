import React, { useEffect, useState } from "react";
import DonationsTables from "../../components/DonationsTables/DonationsTables";
import * as azilDataAPI from "../../api/azilData";
import style from "./Donations.module.css";
import { Link } from "react-router-dom";

function Donations() {
  const [donations, setDonations] = useState([]);

  async function loadDinationsData() {
    try {
      const response = await azilDataAPI.getAllDonations();
      setDonations(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadDinationsData();
  }, []);

  return (
    <>
      <div className={style["container"]}>
        <Link to={"/donacije/unosDonacije"} className={style["new-donation-button"]}>Nova Donacija</Link>
      </div>
      <div className={style["donations-container"]}>
        <DonationsTables
          title="Tražimo"
          donations={donations}
          category="trazi"
          load={loadDinationsData}
        />

        <DonationsTables
          title="Nudi se"
          donations={donations}
          category="nudi"
          load={loadDinationsData}
        />

        <DonationsTables
          title="Donirano"
          donations={donations}
          category="donirano"
          load={loadDinationsData}
        />
      </div>
    </>
  );
}

export default Donations;
