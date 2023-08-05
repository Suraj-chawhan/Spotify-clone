import Image from 'next/image'
import styles from '../styles/home.module.css'
 export default function BottomContainer(
   {playing,setShow,Play,details,title}){
    
     return(
 <div className={styles.bottomPlaymusic}
    onClick={()=>setShow(val=>!val)}>
    <div style={{display:'flex',gap:11}}>
    <p>{title}</p>
    </div>
    <Image 
    src={playing?"/bigpause.png":"/bigplay.png"}
     width={40} height={40} 
     style={{right:0}} onClick={Play}
     >
    </Image>
    </div>)
 }