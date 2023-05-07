import React, { useState, useEffect } from "react";
import { getData } from "../../apiCalls";
import { Link } from "react-router-dom";
import "./CheckIn.css";
import "../Button/Button.css";
import PropTypes from "prop-types";
import Gallery from "../Gallery/Gallery";

const CheckIn = ({ userFeeling }) => {
  const [error, setError] = useState(null);
  const [postcards, setPostcards] = useState([]);

  useEffect(() => {
    // console.log(formFullImage("2013-12-05", "TUWCM9I9sPSgGc89XgvLmw"));
    getData(
      `http://api.wefeelfine.org:8080/ShowFeelings?display=xml&returnfields=sentence,imageid,postdate&feeling=${userFeeling}&limit=5`
    ).then((data) => {
      setPostcards(data.feelings.feeling);
      console.log(postcards, "postcards");
    });
    // `http://api.wefeelfine.org:8080/ShowFeelings?display=xml&returnfields=sentence,imageid,postdate&feeling=${userFeeling}&limit=5`
  }, []);

  return (
    <section className="page-container">
      <h2 className="subtitle">you're not alone</h2>
      <Gallery
        postcards={postcards}
        // postcards={[
        //   {
        //     sentence: "hi",
        //     postdate: "2013-12-05",
        //     imageid: "TUWCM9I9sPSgGc89XgvLmw",
        //   },
        //   {
        //     sentence: "hi",
        //     postdate: "2013-12-05",
        //     imageid: "TUWCM9I9sPSgGc89XgvLmw",
        //   },
        //   {
        //     sentence: "hi",
        //     postdate: "2013-12-05",
        //     imageid: "TUWCM9I9sPSgGc89XgvLmw",
        //   },
        //   {
        //     sentence: "hi",
        //     postdate: "2013-12-05",
        //     imageid: "TUWCM9I9sPSgGc89XgvLmw",
        //   },
        //   {
        //     sentence: "hi",
        //     postdate: "2013-12-05",
        //     imageid: "TUWCM9I9sPSgGc89XgvLmw",
        //   },
        // ]}
      />
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
