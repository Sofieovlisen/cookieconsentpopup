import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";

import Likebutton from "@/app/components/Likebutton";
export default function Home() {
  return (
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
      <Likebutton label="I like Cookies"></Likebutton>
    </div>
  );
}
