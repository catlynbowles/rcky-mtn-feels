import React from 'react'

const MainFeelingPage = ({userEmotion, globalTotals}) => {
  console.log(userEmotion)
  console.log(globalTotals)

  const globalEmotion = globalTotals[userEmotion]

  return (
    <section>
      <h2>If you feel {userEmotion} today...</h2>
      <p>Know that there are others that feel the same way:</p>
      <p>___ in your region</p>
      <p>{globalEmotion} in your world</p>
    </section>
  )
}

export default MainFeelingPage;