import React from "react";
import style from "./Donations.module.css";
import TableRow from "./TableRow";

function DonationsTables({ title, donations ,category, load}) {
  return (
    <div className={style["donation-category"]}>
      <h1>{title}</h1>
      <table className={style["table"]}>
        <thead>
          <tr>
            <th>Tip</th>
            <th>Vrijednost</th>
            <th>Opis</th>
            <th>Opcije</th>
          </tr>
        </thead>
        <tbody>
          {donations.filter(don => don.kategorija === category).map((don) => (
            <TableRow key={don.id} donation={don} load={load}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DonationsTables;
