import Image from 'next/image'
import styles from "../styles/home.module.css"
import Link from 'next/link'
export default function Banner({val}){
  return(
   <Link href={`/${val.singer}`} style={{textDecoration:"none",color:"white"}}>
   <div className={styles.bannerContainer}>
   <Image 
   src={`/${val.musicbanner}`} 
   width={135} height={135}
    style={{borderRadius:15,marginTop:5}}/>
   <p style={{marginTop:10}}>{val.title}</p>
   </div>
   </Link>
    )
}