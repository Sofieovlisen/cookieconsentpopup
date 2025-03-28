"use client";
const CookieFooter = () => {
  return (
    <div>
      <p>We use cookies to improve your user experience.</p>
      <button onClick={() => setCookiesAccepted(!cookiesAccepted)}>
        {" "}
        I like cookies
      </button>
    </div>
  );
};

export default CookieFooter;
