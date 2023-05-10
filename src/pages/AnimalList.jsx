import React, { useEffect, useState } from "react";
import AnimalContainer from "../components/AnimalCards/AnimalContainer";
import * as azilDataAPI from "../api/azilData";
import SearchName from "../components/SearchName/SearchName";

function AnimalList() {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function loadAnimalsData() {
    try {
      const response = await azilDataAPI.getAllAnimals();
      setAnimals(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadAnimalsData();
  }, []);

  return (
    <>
      <SearchName  action={setSearchTerm}/>
      <AnimalContainer
        animals={animals.filter((animal) => {
          if (searchTerm == "") {
            return animal;
          } else if (
            animal.ime.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return animal;
          }
        })}
        load={loadAnimalsData}
      />
    </>
  );
}

export default AnimalList;
