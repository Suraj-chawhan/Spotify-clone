import Link from 'next/link'
import styles from '../styles/home.module.css'

export default function Footer(){
 return(
  <div className={styles.appchildfooter}>
  <hr className={styles.hr}/>
  <ul>
  <li>
  <Link href="/legal" className={styles.link}>Legal</Link>
  </li>
  <li>
  <Link href="/legal/privacy-center" className={styles.link}>Privacy privacy-center</Link>
  </li>
  <li>
  <Link href="/legal/privacy-policy" className={styles.link}>Privacy Policy</Link>
  </li>
  <li>
  <Link href="/legal/cookies" className={styles.link}>Cookies</Link>
  </li>
  <li>
  <Link href="/legal/about-ads" className={styles.link}>About ads</Link>
  </li>
  <li>
  <Link href="/legal/accessibility" className={styles.link}>Accessblity</Link>
  </li>
  </ul>
  <p className={styles.copyright}>©spotify 2023</p>
  </div>
   );
}