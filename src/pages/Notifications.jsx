import React from "react";
import Notification from "../components/Notification/Notification";
import * as azilDataAPI from "../api/azilData";
import { useState, useEffect } from "react";
import NotificationContainer from "../components/NotificationConatainer/NotificationContainer";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  async function loadNotificationsData() {
    try {
      const response = await azilDataAPI.getAllNotifications();
      setNotifications(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadNotificationsData();
  }, []);

  const deleteNotification = async (id) => {
    if(window.confirm("Jeste li sigurni da želite izbrisati ovu obavijest?"))
    {
      const response = await azilDataAPI.deleteNotificationById(id);
      if(response.status === 200)
        loadNotificationsData();
    }
  }

  return (
    <>
      <NotificationContainer>
        {notifications
          .sort((a, b) => new Date(b.datum) - new Date(a.datum))
          .map((obj) => (
            <Notification key={obj.id} note={obj} handleDelete={deleteNotification}/>
          ))}
      </NotificationContainer>
    </>
  );
}

export default Notifications;
