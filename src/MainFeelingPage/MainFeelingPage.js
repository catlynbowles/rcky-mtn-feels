import React from 'react'

const MainFeelingPage = ({userEmotion}) => {
  console.log(userEmotion)
  return (
    <section>
      <h2>If you feel {userEmotion} today...</h2>
      <p>Know that there are others that feel the same way:</p>
      <p>___ in your region</p>
      <p>___ in your world</p>
    </section>
  )
}

export default MainFeelingPage;