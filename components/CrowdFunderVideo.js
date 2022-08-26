import React from 'react'
import ReactPlayer from 'react-player'
  
export default function VideoPlayer(){
  return (
    <div>
      <ReactPlayer 
      playing="true"
      controls="true"
      playIcon="true"
      url='https://fourth-wave.s3.amazonaws.com/Aly_Promo_1.mp4' />
    </div>
  )
}