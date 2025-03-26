import React, { useRef } from 'react'
import './VoideoPlayer.css'
import video from '../../assets/university_video.mp4'

const VoideoPlayer = ({playState, setPlayState}) => {
    
    const player = useRef(null);
    const closeplayer = (e) =>{
        if(e.target === player.current){
setPlayState(false);
        }
    }
  return (
    <div className={`video-payer ${playState?"":"hide"}`} ref={player} onClick={closeplayer}>
        <video src={video} autoPlay muted controls></video>
        </div>
  )
}

export default VoideoPlayer