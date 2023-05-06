import { Component } from "react";
import "./Homepage.css";
import { Route } from "react-router-dom";
import Emotions from "../FeelingSelection/FeelingSelection";
import FeelingView from "../CheckIn/CheckIn";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
import Error from "../Error/Error";
import { getData } from "../../apiCalls";
import Header from "../Header/Header";
import Subtitle from "../Subtitle/Subtitle";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [primaryEmotions, setPrimaryEmotions] = useState([]);
  const [error, setError] = useState("");

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
    getData().then((data) => console.log(data));
    // "http://api.wefeelfine.org:8080/ShowFeelings?display=xml&returnfields=sentence,imageid,postdate&limit=50"
  }, []);

  return (
    <body className="body">
      <Header />
      {/* <Route
        exact
        path="/"
        render={() => (
          <section>
            <Subtitle />
            {error ? (
              <Error text={error} />
            ) : !primaryEmotions.length ? (
              <LoadingIcon />
            ) : (
              <Emotions primaryEmotions={primaryEmotions} />
            )}
          </section>
        )}
      />
      <Route
        path={`/:name`}
        render={({ match }) => {
          return <FeelingView id={match.params.name} />;
        }}
      /> */}
    </body>
  );
};

export default Homepage;
