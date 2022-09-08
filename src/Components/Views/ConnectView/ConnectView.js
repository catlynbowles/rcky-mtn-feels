import React from "react";
import LoadingIcon from "../../../LoadingIcon/LoadingIcon";
import "../../Button/Button.scss";
import Emotions from "../../Emotions/Emotions";
import Error from "../../Error/Error";
import mtns from '../../../assets/14.png'
import mtnss from '../../../assets/11.png'
import fire from '../../../assets/21.png'
import './ConnectView.scss'

const ConnectView = ({ error, primaryEmotions }) => {
  return (
    <section className='emotions-cont'>
      {error ? <Error text={error} /> : !primaryEmotions.length ? <LoadingIcon /> : <Emotions primaryEmotions={primaryEmotions} />}
      <div className="img-container">
        <img className='mtns' src={mtns} height='200' />
        <img className='fire' src={fire} height='200' />
        <img className='mtns-2' src={mtnss} height='200' />
      </div>
    </section>
  )
}

export default ConnectView;