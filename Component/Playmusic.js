import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRepeat,faShuffle} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/home.module.css'
import MusicPlayer from './MusicPlayer.js'
import BottomContainer from './BottomContainer'

export default function Playmusic({playing,Play,Next,Prev,currentTime,handleRangeChange,audioRef,repeat,setRepeat,shuffle,setShuffle,show,setShow,details,displayBottom,setDisplayBottom,title}){

 
 const[threeDot,setThreeDot]=React.useState(false)
 
 //Repeat
 const check=repeat?
 <Image src="/repeat1.png" width={26} height={26} 
 onClick={()=>setRepeat(val=>!val)} style={{color:"white"}} className={styles.playmusicChildContainerImage}></Image>
 :
 <FontAwesomeIcon icon={faRepeat} 
 onClick={()=>setRepeat(val=>!val)}/>
 
 ///Suffle
const checkshuffle=shuffle?
<FontAwesomeIcon icon={faShuffle} onClick={()=>setShuffle(val=>!val)}  className={styles.playmusicChildContainer}/>:
<Image src="/notshuffle.png" width={18} height={18} 
 onClick={()=>setShuffle(val=>!val)} className={styles.playmusicChildContainerImage} ></Image>

  return(
    <div>
{displayBottom?
show?<BottomContainer 
playing={playing} 
setShow={setShow} 
Play={Play}
details={details}
title={title}
/>:<MusicPlayer 
  playing={playing} setShow={setShow}  
  setThreeDot={setThreeDot} audioRef={audioRef}
  currentTime={currentTime} 
  handleRangeChange={handleRangeChange}
  check={check} Prev={Prev} Next={Next} 
  checkshuffle={checkshuffle} 
  threeDot={threeDot} Play={Play}
  details={details}
  />
:""}
    </div>
    );

}