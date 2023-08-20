import Link from 'next/link'
import styles from '../styles/home.module.css'
import Image from 'next/image'
import Banner from './Banner.js'
export default function FindBanner({music,song}){
  
const Music=music.filter(val=>val.musiccatagory===song)
const getBanner=Music.map(val=><Banner val={val} key={val.id}/>)
  return(
    <div className={styles.musiclist}>
    {getBanner}
    </div>
    );
}

