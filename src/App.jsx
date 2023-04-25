import "./App.css";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import AnimalList from "./pages/AnimalList";
import Donations from "./pages/Donations";
import AddEditAnimal from "./pages/AddEditAnimal";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1>App</h1>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zivotinje" element={<AnimalList />} />
          <Route path="/donacije" element={<Donations />} />
          <Route path="/obavijesti" element={<Notifications />} />
          <Route path="/unosZivotinja" element={<AddEditAnimal />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
