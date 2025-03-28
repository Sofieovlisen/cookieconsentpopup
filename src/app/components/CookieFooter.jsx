"use client";
const CookieFooter = ({ cookiesAccepted, setCookiesAccepted }) => {
  return (
    <div className="cookie_footer">
      <p>We use cookies to improve your user experience.</p>
      <button onClick={() => setCookiesAccepted(!cookiesAccepted)}>
        {" "}
        I like cookies
      </button>
    </div>
  );
};

export default CookieFooter;
