import React, { useState, useEffect } from "react";
import { getData } from "../../apiCalls";
import { Link } from "react-router-dom";
import "./CheckIn.css";
import "../Button/Button.css";
import PropTypes from "prop-types";
import Gallery from "../Gallery/Gallery";
import Error from "../Error/Error";

const CheckIn = ({ userFeeling }) => {
  const [error, setError] = useState(null);
  const [postcards, setPostcards] = useState([]);
  const [collection, setCollection] = useState([]);

  const getRandomSelection = (array) => {
    let imageElements = array.filter((ele) => ele.$.imageid);

    const shuffled = imageElements.sort(() => 0.5 - Math.random());

    let selected = shuffled.slice(0, 5);
    return selected;
  };

  const refreshImages = (e) => {
    e.preventDefault();

    const randomSelection = getRandomSelection(collection);
    setPostcards(randomSelection);
  };

  useEffect(() => {
    if (!postcards.length) {
      getData(
        `http://api.wefeelfine.org:8080/ShowFeelings?display=xml&returnfields=sentence,imageid,postdate&feeling=${userFeeling}&limit=500&extraimages=8`
      )
        .then((data) => {
          setCollection(data.feelings.feeling);
          const randomSelection = getRandomSelection(data.feelings.feeling);
          setPostcards(randomSelection);
        })
        .catch((err) => {
          console.log("err", err.message);
          setError(err.message);
        });
    }
  }, [userFeeling, postcards]);

  return (
    <section className="page-container">
      <h2 className="subtitle">you're not alone</h2>
      {!error ? (
        <div>
          <Gallery postcards={postcards} />
        </div>
      ) : (
        <Error text={error} />
      )}
      <div className="button-container">
        <div
          className="checkin-buttons feelingButton refresh"
          onClick={(e) => refreshImages(e)}
        >
          <p>Refresh</p>
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="feelingButton checkin-buttons">
            <p>Back</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CheckIn;

CheckIn.propTypes = {
  id: PropTypes.string.isRequired,
};
