import React from 'react'
import ReactPlayer from 'react-player'
import styles from '../styles/Home.module.css';
  
export default function VideoPlayer(){
  return (
    <div>
      <ReactPlayer 
      className={styles.reactplayer}
      playing={false}
      controls={true}
      playIcon="true"
      url='https://fourth-wave.s3.amazonaws.com/Aly+Promo+For+reveiw+and+release.mp4' />
    </div>
  )
}