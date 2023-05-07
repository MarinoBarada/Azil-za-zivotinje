import React, { useState, useEffect } from "react";
import style from "./AnimalCard.module.css";
import AnimalCard from "./AnimalCard";
import RadioInput from "../RadioInput/RadioInput";

function AnimalContainer({ animals, load }) {
  const [selectedValue, setSelectedValue] = useState("Svi");
  const [selectedSpecies, setSelectedSpecies] = useState("Sve");
  const [filterItems, setFilterItems] = useState([]);

  const handleOptionAdopted = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    if (selectedValue == "Svi" && selectedSpecies == "Sve") {
      setFilterItems(animals);
    } else if (
      (selectedValue == "Svi" && selectedSpecies == "mačka") ||
      selectedSpecies == "pas" ||
      selectedSpecies == "ostalo"
    ) {
      setFilterItems(animals.filter((item) => item.vrsta == selectedSpecies));
    }

    if (selectedValue == "Udomljen" && selectedSpecies == "Sve") {
      setFilterItems(animals.filter((item) => item.udomljen == true));
    } else if (selectedValue == "Udomljen") {
      setFilterItems(
        animals.filter(
          (item) => item.udomljen == true && item.vrsta == selectedSpecies
        )
      );
    }

    if (selectedValue == "Nije udomljen" && selectedSpecies == "Sve") {
      setFilterItems(animals.filter((item) => item.udomljen == false));
    } else if (selectedValue == "Nije udomljen") {
      setFilterItems(
        animals.filter(
          (item) => item.udomljen == false && item.vrsta == selectedSpecies
        )
      );
    }
  }, [animals, selectedValue, selectedSpecies]);

  const handleOptionSpecies = (event) => {
    setSelectedSpecies(event.target.value);
  };

  return (
    <div className={style["animals-page"]}>
      <div className={style["filters-container"]}>
        <div className={style["filter-container"]}>
          <h2>Filter:</h2>
          <RadioInput
            value="Svi"
            checked={selectedValue === "Svi"}
            action={handleOptionAdopted}
            filter="Svi"
          />
          <RadioInput
            value="Udomljen"
            checked={selectedValue === "Udomljen"}
            action={handleOptionAdopted}
            filter="Udomljen"
          />
          <RadioInput
            value="Nije udomljen"
            checked={selectedValue === "Nije udomljen"}
            action={handleOptionAdopted}
            filter="Nije udomljen"
          />
        </div>

        <div className={style["filter-container"]}>
          <h2>Vrsta:</h2>
          <RadioInput
            value="Sve"
            checked={selectedSpecies === "Sve"}
            action={handleOptionSpecies}
            filter="Sve"
          />
          <RadioInput
            value="mačka"
            checked={selectedSpecies === "mačka"}
            action={handleOptionSpecies}
            filter="Mačka"
          />
          <RadioInput
            value="pas"
            checked={selectedSpecies === "pas"}
            action={handleOptionSpecies}
            filter="Pas"
          />
          <RadioInput
            value="ostalo"
            checked={selectedSpecies === "ostalo"}
            action={handleOptionSpecies}
            filter="Ostalo"
          />
        </div>
      </div>
      <div className={style["card-container"]}>
        {filterItems
          .sort(function (a, b) {
            if (a.ime < b.ime) {
              return -1;
            }
            if (a.ime > b.ime) {
              return 1;
            }
            return 0;
          })
          .map((animal) => (
            <AnimalCard key={animal.id} animals={animal} load={load} />
          ))}
      </div>
    </div>
  );
}

export default AnimalContainer;
