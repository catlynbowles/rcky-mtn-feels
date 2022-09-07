import React from "react";
import Subtitle from "../../Subtitle/Subtitle";
import LoadingIcon from "../../../LoadingIcon/LoadingIcon";
import "../../Button/Button.scss";
import Emotions from "../../Emotions/Emotions";
import Error from "../../Error/Error";

const ConnectView = ({ error, primaryEmotions }) => {
  return (
    <section>
      <Subtitle />
      {error ? <Error text={error} /> : !primaryEmotions.length ? <LoadingIcon /> : <Emotions primaryEmotions={primaryEmotions} />}
    </section>
  )
}

export default ConnectView;