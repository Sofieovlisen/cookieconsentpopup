"use client";
import { useState } from "react";

import CookieHeader from "./CookieHeader";
import CookieFooter from "./CookieFooter";

const Cookie = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  return (
    !cookiesAccepted && (
      <div className="div">
        <CookieHeader></CookieHeader>
        <CookieFooter></CookieFooter>
      </div>
    )
  );
};

export default Cookie;
