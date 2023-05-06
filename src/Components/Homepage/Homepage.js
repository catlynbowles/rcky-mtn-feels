import "./Homepage.css";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Error from "../Error/Error";
import { getData } from "../../apiCalls";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import FeelingSelection from "../FeelingSelection/FeelingSelection";
import CheckIn from "../CheckIn/CheckIn";

const Homepage = () => {
  return (
    <body className="body">
      <Header />
      <Route
        exact
        path="/"
        render={() => <FeelingSelection />}
      />
      <Route
        path={`/feeling/:name`}
        render={({ match }) => {
          return <CheckIn userFeeling={match.params.name} />;
        }}
      />
    </body>
  );
};

export default Homepage;
