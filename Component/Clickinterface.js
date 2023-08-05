import React from 'react'
import styles from '../styles/home.module.css'
import Image from 'next/image'
import ShareButton from './Share.js'
import {useRouter} from "next/router"

export default function Clickinterface({details,playing,Play},music) {
const[like,setLike]=React.useState(false)





return(
  <div className={styles.onclick}>
  <Image 
  src={`/${details.musicimg}`} 
  width={150} height={150} 
  className={styles.descriptionImage}>
  </Image>
  <h3>{details.singer}</h3>
  <p>{details.description}</p>
  <Image 
  src="/greenlogo.png" 
  width={100} height={35} 
  className={styles.descriptionSpotify} >
  </Image>
  <p>Likes{details.likes}.about 10hr</p>
 <div  style={{display:'flex',justifyContent:'space-between',fontSize:20}}>
 <div style={{display:'flex',gap:20,alignItems:'center'}}>
 <p onClick={()=>setLike(val=>!val)}>{like?'♥️':'🤍'}</p>
 <ShareButton/>
 </div>
 <Image
 src={playing?"/bigpause.png":"/bigplay.png"} 
 width={55} height={55} onClick={Play} >
 </Image>
 </div>
  </div>
   )

   }
   


