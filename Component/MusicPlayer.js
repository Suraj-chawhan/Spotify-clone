import React,{useRef} from 'react'
import Image from 'next/image'
import Share from "./Share.js"
import styles from '../styles/home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faForward,faBackward,faRepeat,faShuffle,faBack ,faChevronDown,faRepeat1} from '@fortawesome/free-solid-svg-icons'

 export default function MusicPlayer(
   {
   playing,setShow,setThreeDot,
   audioRef,currentTime,
   handleRangeChange,check,Prev,Next,
   checkshuffle,threeDot,Play,details
   }){
 return(
 <div className={styles.playmusic}>
 <div className={styles.playmusicInside}>
 <div className={styles.chevronTop}>
     <FontAwesomeIcon icon={faChevronDown}
     onClick={()=>{setShow(true)}} className={styles.back}
     />
   <p style={{marginRight:20}} 
   onClick={()=>{setThreeDot(val=>!val)}}>&#8942;</p>
  </div>
  <Image 
  src={`/${details.musicimg}`} width={200}
  height={200} className={styles.descriptionImage} alt="Music Img"/>

 <input type="range"   
 min={0}
 max={audioRef.current && audioRef.current.duration}
 step={0.1}
 value={currentTime}
 onChange={handleRangeChange} 
 />
 <div className={styles.playmusicChildContainer}>
 {check}
   <FontAwesomeIcon icon={faBackward} onClick={Prev}/>
   <Image src={playing?"/bigpause.png":"/bigplay.png"}  
   width={70} height={70} onClick={Play}
   className={styles.playmusicChildContainerImage2} 
   />
  <FontAwesomeIcon icon={faForward} onClick={Next}/>
 {checkshuffle}
   </div>
    {threeDot?
  <div className={styles.playmusicshare}>
  <div style={{display:"flex",flexDirection:"column"}}>
  <p 
  onClick={()=>{setThreeDot(val=>!val)}} 
  style={{width:150,height:40, 
  backgroundColor:"grey",borderRadius:30,
  padding:10,textAlign:"center"
  }}
 >
 Back
 </p>
  <div style={{width:150,height:40, backgroundColor:"grey",borderRadius:30,padding:10,textAlign:"center"}}>
  <Share/>
  </div>
  </div>
  </div>:""}
  </div>
 </div>
    );
  }