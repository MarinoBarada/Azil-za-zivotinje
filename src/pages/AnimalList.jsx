import React, { useEffect, useState } from "react";
import AnimalContainer from "../components/AnimalCards/AnimalContainer";
import * as azilDataAPI from "../api/azilData";

function AnimalList() {
  const [animals, setAnimals] = useState([]);

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
    <div className="animal">
      <AnimalContainer animals={animals} load={loadAnimalsData}/>
    </div>
  );
}

export default AnimalList;
