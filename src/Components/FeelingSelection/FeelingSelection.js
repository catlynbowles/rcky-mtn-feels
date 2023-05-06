import React from "react";
import Button from "../Button/Button";
import "./FeelingSelection.css";
import PropTypes from "prop-types";

const primaryEmotions = [
  { name: "sadness", color: "#827aca" },
  { name: "happiness", color: "#eaea4c" },
  { name: "fear", color: "#7aca8b" },
  { name: "anger", color: "#ed5362" },
  { name: "surprise", color: "#5eedeb" },
  { name: "disgust", color: "#e7e1da" },
  { name: "love", color: "#ea4c89" },
];

const FeelingSelection = () => {

  const emotionalButtons = primaryEmotions.map((emotion) => {
    return <Button id={emotion.name} key={emotion.name} name={emotion.name} color={emotion.color}/>;
  });

  return <section className="button-container">{emotionalButtons}</section>;
};

export default FeelingSelection;

FeelingSelection.propTypes = {
  primaryEmotions: PropTypes.array.isRequired,
};
