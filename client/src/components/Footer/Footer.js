import React from "react";
import { useStateValues } from "../../contexts/StateProvider";
import Player from "../Player/Player";
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
        <button className="footer__button">SIGN UP FREE</button>
      </div>
    );
  }
  return <>{access_token ? <Player /> : footer()}</>;
}
