import React from "react";

function MapLocation() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1216.5858677455278!2d16.46778719487565!3d43.51182364006495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355f7800717669%3A0xf8e012eef1668053!2sPICS-%20Digitalna%20Dalmacija!5e0!3m2!1shr!2shr!4v1682343903439!5m2!1shr!2shr"
        width="100%"
        height="600"
        style={{ border: "0.1em #333 solid" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default MapLocation;
