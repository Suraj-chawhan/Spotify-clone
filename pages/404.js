import {useRouter} from 'next/router'
import styles from '../styles/home.module.css'
import Image from 'next/image'
export default function Err(){
  const router=useRouter()
  return(
    <div style={{marginTop:-100}}>
    <div className={styles.errPageContainer}>
    <Image src="/err-logo.png" width={70} height={70} alt="Error"/>
    <h1 style={{fontSize:50,color:"white"}}>Page Not Found</h1>
    <p>We can’t seem to find the page you are looking for.</p>
    <button
    onClick={()=>router.push("/")} 
    className={styles.errBtn}
    >
    HOME
    </button>
    <button 
    onClick={()=>router.push("/Navbar/help")} 
    style={{color:"white",fontSize:15,marginTop:20,backgroundColor:"#111222",border:"none"}}
    >
    HELP
    </button>
    </div>
    </div>
    )
}

Err.getLayout=function PageLayout(page){
  return(
    <div className={styles.errLayout}>
    {page}
    </div>
    )
}