import axios from "axios";

export const getAllNotifications = () => axios.get("/obavijesti");