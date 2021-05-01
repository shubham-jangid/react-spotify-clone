import React from "react";
import "../styles/components/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <h3>Preview of Spotify</h3>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <button className="footer__button">SIGN UP FREE</button>
    </div>
  );
}
