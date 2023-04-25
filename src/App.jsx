import "./App.css";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import AnimalList from "./pages/AnimalList";
import Donations from "./pages/Donations";
import AddEditAnimal from "./pages/AddEditAnimal";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);

  const userChange = (event) => {
    setUser(event.target.checked);
  };

  return (
    <>
      <Navbar checked={user} action={userChange}/>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zivotinje" element={<AnimalList />} />
          <Route path="/donacije" element={<Donations />} />
          <Route path="/obavijesti" element={<Notifications />} />
          {user && <Route path="/unosZivotinja" element={<AddEditAnimal />} />}
        </Routes>
      </div>
    </>
  );
}

export default App;
