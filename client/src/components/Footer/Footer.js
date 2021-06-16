import React from "react";
import { useStateValues } from "../../contexts/StateProvider";
import "./footer.styles.css";
export default function Footer() {
  const [{ access_token }] = useStateValues();

  function footer() {
    return (
      <div className="footer">
        <div className="footer__content">
          <h3>Preview of Spotify</h3>
          <p>
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <button className="footer__button">
          <a href="https://www.spotify.com/in-en/signup/?forward_url=https%3A%2F%2Fopen.spotify.com%2F">
            SIGN UP FREE
          </a>
        </button>
      </div>
    );
  }
  return <>{!access_token && footer()}</>;
}
