import React, { useState, useEffect } from "react";
import { getData } from "../../apiCalls";
import { Link } from "react-router-dom";
import "./CheckIn.css";
import "../Button/Button.css";
import PropTypes from "prop-types";

const CheckIn = ({ userFeeling }) => {
  const [error, setError] = useState(null);

  const formFullImage = (postdate, imageId, imageSize) => {
    let imgpath = `http://images.wefeelfine.org/data/images/`;
    imgpath += postdate.replaceAll("-", "/");
    imgpath += "/" + imageId;
    if (imageSize == "thumb") {
      imgpath += "_thumb.jpg";
    } else imgpath += "_full.jpg";
    return imgpath;
  };

  useEffect(() => {
    console.log(formFullImage("2013-12-05", "TUWCM9I9sPSgGc89XgvLmw"));
    getData(
      // `http://api.wefeelfine.org:8080/ShowFeelings?display=xml&returnfields=sentence,imageid,postdate&feeling=${userFeeling}&limit=5`
    ).then((data) => console.log(data));
  }, []);

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
