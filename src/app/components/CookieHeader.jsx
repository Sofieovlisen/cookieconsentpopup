"use client";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";
const CookieHeader = () => {
  return (
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
  );
};

export default CookieHeader;
