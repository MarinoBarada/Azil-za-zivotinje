import axios from "axios";

export const getAllNotifications = () => axios.get("/obavijesti");

export const createNotification = (data) => axios.post("/obavijesti", data);

export const deleteNotificationById = (id) => axios.delete(`/obavijesti/${id}`);