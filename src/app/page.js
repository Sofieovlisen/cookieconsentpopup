// "use client";
// import { useState } from "react";

// import { LiaCookieBiteSolid } from "react-icons/lia";
// import { IoCloseOutline } from "react-icons/io5";

import Likebutton from "@/app/components/Likebutton";
import Cookie from "./components/Cookie";
export default function Home() {
  // const [cookiesAccepted, setCookiesAccepted] = useState(false);
  return (
    <Cookie></Cookie>
    // <div className="div">
    //   <div className="icons">
    //     <LiaCookieBiteSolid
    //       style={{ fontSize: "56px", rotate: "-90deg", color: "white" }}
    //     ></LiaCookieBiteSolid>
    //     <IoCloseOutline
    //       style={{
    //         display: "flex",
    //         alignSelf: "flex-start",
    //         color: "white",
    //         justifyContent: "flex-end",
    //         fontSize: "20px",
    //       }}
    //     ></IoCloseOutline>
    //   </div>
    //   <p>We use cookies to improve your user experience.</p>
    //   <button onClick={() => setCookiesAccepted(!cookiesAccepted)}>
    //     {" "}
    //     I like cookies
    //   </button>
    //   {/* <Likebutton onClick={() => } label="I like Cookies"></Likebutton> */}
    // </div>
  );
}
