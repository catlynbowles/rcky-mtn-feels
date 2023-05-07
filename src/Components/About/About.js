import React from "react";
import "./About.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <h3 className="subtitle about">About</h3>
      <div className="description-container">
        <p className="description">
          I created this application with the intention of incorporating my
          values into my work as a developer. Even though the internet is
          sometimes a place we go in solace to zone out from our emotions, I
          have always wanted to create a tool to help people feel less alone in
          that space. This idea was inspired by a very interesting and unique
          API called the We Feel API. It appears this API is not currently being
          maintained, at least not since 2013/2014 based on the data I'm able to
          retrieve, but the API works by pulling information from tweets, and
          allows queries to connect to emotions, pictures and sentences. (Check
          it out <a href="http://wefeelfine.org/api.html">here</a> if you'd like
          to learn more!)
        </p>
        <p className="description">
          I encountered various issues while building, including some CORS
          problems and had quite a bit of troubleshooting while learning to work
          with xml for the first time, since that is what the API initially
          returns. But it's been really fun to build and I hope I am able to
          work with more data like this in the future. Please enjoy! And feel
          free to contact me at catlynbowles@gmail.com with any comments,
          questions, or feedback. XO
        </p>
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="feelingButton checkin-buttons">
          <p>Back</p>
        </div>
      </Link>
    </div>
  );
}
