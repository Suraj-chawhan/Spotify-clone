import styles from '../styles/home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Sociallink from './Socialdata.js'
export default function Suggest(){





 return(
   <div className={styles.suggestcontainer}>
   <div>
   <h3>Company</h3>
  <ul className={styles.suggestlist}>
  <li>
  <Link href="/legal" className={styles.link}>About</Link>
  </li>
  <li>
  <Link href="/legal/privacy-center" className={styles.link}>Jobs</Link>
  </li>
  <li>
  <Link href="/legal/privacy-policy" className={styles.link}>For the Record</Link>
  </li>
  </ul>
   </div>
   <div>
   <h3>Communitist</h3>
  <ul className={styles.suggestlist}>
  <li>
  <Link href="/legal" className={styles.link}>For Artist</Link>
  </li>
  <li>
  <Link href="/legal/privacy-center" className={styles.link}>Advertising</Link>
  </li>
  <li>
  <Link href="/legal/privacy-policy" className={styles.link}>Developers</Link>
  </li>
  <li>
  <Link href="/legal/cookies" className={styles.link}>Investors</Link>
  </li>
  <li>
  <Link href="/legal/about-ads" className={styles.link}>Vendors</Link>
  </li>
  <li>
  <Link href="/legal/accessibility" className={styles.link}>Spotify for Work</Link>
  </li>
  </ul>
   </div>
   <div>
   <h3>Useful Link</h3>
   <ul className={styles.suggestlist}>
   <li><Link href="/" className={styles.link}>Support</Link></li>
   <li><Link href="/" className={styles.link}>Mobile apps</Link></li>
   </ul>
   </div>
   <div className={styles.social}>
  {
  Sociallink.map(val=>{
  return(
  <div key={val.id}>
  <a href={val.url}>
  <Image src={`/${val.img}`} width={23} height={23} style={{margin:5,backgroudColor:'#ff0000',borderRadius:50,padding:5}}>
  </Image>
  </a>
  </div>
  )
  }
  )
  }
  
   </div>
   </div>
   );
}