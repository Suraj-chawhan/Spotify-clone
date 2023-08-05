import styles from '../styles/home.module.css'
import React,{useRef} from 'react'
import Image from 'next/image'
import Share from "./Share.js"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
faForward,faBackward,
faRepeat,faShuffle,faBack,
faChevronDown,faRepeat1} 
from '@fortawesome/free-solid-svg-icons'

export default function SearchmusicComponent(
  {playing,setPlaying,audioRef,handleRangeChange,setShow,currentTime,check,Next,Prev,Play,checkshuffle,details}
  ){
const[dot,setDot]=React.useState(false)

function call(){
  setDot(val=>!val)
}

return(
 <div className={styles.playmusic}>
 <div className={styles.chevronTop}>
     <FontAwesomeIcon icon={faChevronDown}
     onClick={()=>{setShow(false)}} className={styles.back}
     />
   <p style={{marginRight:20}} 
   onClick={call}>&#8942;</p>
  </div>
  <Image 
  src={`/${details}`}width={200}
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
    {dot?
  <div className={styles.playmusicshare}>
  <div style={{display:"flex",flexDirection:"column"}}>
  <p 
  onClick={call} 
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
    );
  }