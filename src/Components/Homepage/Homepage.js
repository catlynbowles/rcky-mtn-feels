import "./Homepage.css";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Error from "../Error/Error";
import { getData } from "../../apiCalls";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import FeelingSelection from "../FeelingSelection/FeelingSelection";
import CheckIn from "../CheckIn/CheckIn";

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
      <Route
        exact
        path="/"
        render={() => (error ? <Error text={error} /> : <FeelingSelection />)}
      />
      <Route
        path={`/feeling/:name`}
        render={({ match }) => {
          return <CheckIn id={match.params.name} />;
        }}
      />
    </body>
  );
};

export default Homepage;
