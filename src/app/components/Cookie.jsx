"use client";
import { useState } from "react";

import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";

const Cookie = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  return (
    !cookiesAccepted && (
      <div className="div">
        <div className="icons">
          <LiaCookieBiteSolid
            style={{ fontSize: "56px", rotate: "-90deg", color: "white" }}
          ></LiaCookieBiteSolid>
          <IoCloseOutline
            style={{
              display: "flex",
              alignSelf: "flex-start",
              color: "white",
              justifyContent: "flex-end",
              fontSize: "20px",
            }}
          ></IoCloseOutline>
        </div>
        <p>We use cookies to improve your user experience.</p>
        <button onClick={() => setCookiesAccepted(!cookiesAccepted)}>
          {" "}
          I like cookies
        </button>
      </div>
    )
  );
};

export default Cookie;
