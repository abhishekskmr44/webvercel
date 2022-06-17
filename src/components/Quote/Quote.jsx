import React from "react";
import "./Quote.css";
import LightSpeed from "react-reveal/LightSpeed";
const Quote = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <LightSpeed left ssrFadeout>
          <div className="quote-wrapper">
            <div className="quote">
              <h1>
                <q>
                “Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.”
                ― Lao Tzu
                </q>
              </h1>
            </div>
            <div className="empty"></div>
          </div>
        </LightSpeed>
      </div>
    </div>
  );
};

export default Quote;
