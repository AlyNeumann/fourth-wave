import React from 'react'
import ReactPlayer from 'react-player'
import styles from '../styles/Home.module.css';
  
export default function VideoPlayer(){
  return (
    <div>
      <ReactPlayer 
      className={styles.reactplayer}
      playing="true"
      controls="true"
      playIcon="true"
      url='https://fourth-wave.s3.amazonaws.com/Aly_Promo_1.mp4' />
    </div>
  )
}