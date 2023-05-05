import axios from "axios";

export const getAllNotifications = () => axios.get("/obavijesti");

export const createNotification = (data) => axios.post("/obavijesti", data);

export const deleteNotificationById = (id) => axios.delete(`/obavijesti/${id}`);

export const getAllDonations = () => axios.get("/donacije");

export const updateDonation = (id, category) => axios.patch(`/donacije/${id}`, {kategorija: category ,});

export const deleteDonation = (id) => axios.delete(`/donacije/${id}`);

export const createDonation = (data) => axios.post("/donacije", data);

export const getAllAnimals = () => axios.get("/zivotinje");

export const updateAnimals = (id, adopted) => axios.patch(`/zivotinje/${id}`, {udomljen: adopted ,});

export const editAnimals = (id, data) => axios.put(`/zivotinje/${id}`, data);

export const createAnimal = (data) => axios.post("/zivotinje", data);

/*json-server --watch azil.json --port 3001 */