import React from "react";
import Notification from "../components/Notification/Notification";
import * as azilDataAPI from "../api/azilData";
import { useState, useEffect } from "react";
import NotificationContainer from "../components/NotificationConatainer/NotificationContainer";
import Swal from "sweetalert2";

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
    try {
      const result = await Swal.fire({
        title: "Jeste li sigurni da želite izbrisati ovu obavijest?",
        text: "Ovo nećete moći vratiti!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Da, izbriši!",
        preConfirm: async () => {
          const response = await azilDataAPI.deleteNotificationById(id);
          if (response.status === 200) {
            return true;
          } else {
            throw new Error("There was an error deleting the notification.");
          }
        },
      });

      if (result.isConfirmed) {
        Swal.fire("Izbrisano!", "Obavijest je izbrisana.", "success");
        loadNotificationsData();
      }
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Greška",
        "Došlo je do pogreške prilikom brisanja obavijesti.",
        "error"
      );
    }
  };

  return (
    <>
      <NotificationContainer>
        {notifications
          .sort((a, b) => new Date(b.datum) - new Date(a.datum))
          .map((obj) => (
            <Notification
              key={obj.id}
              note={obj}
              handleDelete={deleteNotification}
            />
          ))}
      </NotificationContainer>
    </>
  );
}

export default Notifications;
