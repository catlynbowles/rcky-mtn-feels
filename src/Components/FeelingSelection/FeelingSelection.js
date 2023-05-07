import React, { useEffect } from "react";
import Button from "../Button/Button";
import "./FeelingSelection.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom";

const primaryEmotions = [
  { name: "sad", color: "#827aca" },
  { name: "happy", color: "#eaea4c" },
  { name: "afraid", color: "#7aca8b" },
  { name: "angry", color: "#ed5362" },
  { name: "surprised", color: "#5eedeb" },
  { name: "disgusted", color: "#0000FF" },
  { name: "loved", color: "#ea4c89" },
];

const FeelingSelection = () => {
  const emotionalButtons = primaryEmotions.map((emotion) => {
    return (
      <Button
        id={emotion.name}
        key={emotion.name}
        name={emotion.name}
        color={emotion.color}
      />
    );
  });

  return (
    <section className="homepage">
      <h2 className="subtitle">I feel</h2>
      <div>
        <div className="options-container">
          <div className="button-container">{emotionalButtons}</div>
          <Link style={{ textDecoration: "none" }} to="/learn-more">
            <div className="feelingButton learn-more">
              <p>Learn More</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeelingSelection;

FeelingSelection.propTypes = {
  primaryEmotions: PropTypes.array.isRequired,
};
