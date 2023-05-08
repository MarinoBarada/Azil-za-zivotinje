import "./App.css";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import AnimalList from "./pages/AnimalList";
import Donations from "./pages/Donations/Donations";
import AddEditAnimal from "./pages/AddEditAnimal/AddEditAnimal";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useState, useContext } from "react";
import Footer from "./components/Footer/Footer";
import userTypeContext from "./context/userTypeContext";
import axios from "axios";
import AddNotification from "./pages/AddNotification/AddNotification";
import AddDonation from "./pages/AddDonation/AddDonation";
import NotFound from "./pages/NotFound/NotFound";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers = {
  "content-type": "application/json",
};

function App() {
  const [user, setUser] = useState(false);

  const userChange = (event) => {
    setUser(event.target.checked);
  };

  return (
    <>
      <userTypeContext.Provider value={user}>
        <Navbar action={userChange} />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zivotinje" element={<AnimalList />} />
            <Route path="/donacije" element={<Donations />} />
            <Route path="/donacije/unosDonacije" element={<AddDonation />} />
            <Route path="/obavijesti" element={<Notifications />} />
            <Route path="/obavijesti/unosObavijesti" element={<AddNotification />} />
            {user && (
              <Route path="/unosZivotinja" element={<AddEditAnimal />} />
            )}
            <Route path="/editiranjeZivotinja/:id" element={<AddEditAnimal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </userTypeContext.Provider>
    </>
  );
}

export default App;
