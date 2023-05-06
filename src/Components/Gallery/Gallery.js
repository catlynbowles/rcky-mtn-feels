import React from "react";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
import Postcard from "../Postcard/Postcard";
import "./Gallery.css";

export default function Gallery({ postcards }) {
  console.log(postcards);
  const generatePostcards = () => {
    return postcards.map((postcard) => {
      return (
        <Postcard
          sentence={postcard.sentence}
          imageid={postcard.imageid}
          postdate={postcard.postdate}
        />
      );
    });
  };
  return (
    <div className="gallery">
      {!postcards.length ? <LoadingIcon /> : generatePostcards()}
    </div>
  );
}
