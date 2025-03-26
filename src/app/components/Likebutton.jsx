"use client";
import { useState } from "react";

const Likebutton = (props) => {
  const [likes, setLikes] = useState(0);
  return (
    <button onClick={() => setLikes(likes + 1)}>
      {props.label}
      {/* {likes > 1 ? "s" : ""} {likes} */}
    </button>
  );
};

export default Likebutton;
