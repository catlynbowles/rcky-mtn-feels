import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./Button.css";

const Button = ({ name, color }) => {
  return (
    <Link to={`/feeling/${name}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          color: color,
          textShadow: `0 0 4px ${color}`,
          "--pulseColor": color,
        }}
        className={`${name} feelingButton`}
      >
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default Button;

Button.propType = {
  name: PropTypes.string.isRequired,
};
