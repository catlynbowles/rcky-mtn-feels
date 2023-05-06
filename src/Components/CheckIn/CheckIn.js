import React, { useState, useEffect } from "react";
import { getData } from "../../apiCalls";
import { Link } from "react-router-dom";
import "./CheckIn.css";
import "../Button/Button.css";
import PropTypes from "prop-types";

const CheckIn = ({ id }) => {
  useEffect(() => {}, []);

  return (
    <section className="page-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="feelingButton home-button">
          <p>Back</p>
        </div>
      </Link>
    </section>
  );
};

export default CheckIn;

CheckIn.propTypes = {
  id: PropTypes.string.isRequired,
};
