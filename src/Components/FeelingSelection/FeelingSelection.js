import React, { useEffect } from "react";
import Button from "../Button/Button";
import "./FeelingSelection.css";
import PropTypes from "prop-types";

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
    <section>
      <h2 className="subtitle">I feel</h2>
      <div className="button-container">{emotionalButtons}</div>
    </section>
  );
};

export default FeelingSelection;

FeelingSelection.propTypes = {
  primaryEmotions: PropTypes.array.isRequired,
};
