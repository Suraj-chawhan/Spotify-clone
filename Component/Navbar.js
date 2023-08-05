import Image from 'next/image'
import {useRouter} from 'next/router'
import styles from "../styles/home.module.css"
import React from 'react'
import Link from 'next/link'
import {app} from './Firebase.js'
import { getAuth,signOut,onAuthStateChanged} from "firebase/auth";
export default function Navbar(){
  
  const router=useRouter()
  const auth=getAuth(app);
  
  const[style,setStyle]=React.useState(true)
  const [user,setUser]=React.useState(false)
  
  

  const[icon,setIcon]=React.useState(true)
    
  function changeicon(){
    setStyle(val=>!val)
    setIcon(val=>!val)
  }
  
function call(){
setStyle(val=>!val)
setIcon(val=>!val)
  }
  
  

   const b=<button onClick={changeicon} className={styles.btn}>&#8801;</button>
  const c=<button onClick={changeicon} className={styles.btn}>&#10006;</button>
  
  
  React.useEffect(()=>{
  
  const monitorAuthChange=async()=>{
    await  onAuthStateChanged(auth,currentUser=>{
     if(currentUser){
       setUser(false)
     }
     else{
       setUser(true)
     }
    })
    }
 monitorAuthChange()
  },[])
  
    const Logout=async()=>{
    await signOut(auth)
    }
    

  
 
  
  
 return(
   <div>
 <div className={styles.nav} >
 <Image src="/spotifylogo.png" height={27} width={90}/>

 <div className={styles.search}>
 <Image src="/search.png" onClick={()=>router.push("/search")} width={19} height={19} style={{marginRight:10}}></Image>
<h3 onClick={()=>alert("Open app")}>Open App</h3>
{icon?b:c}
 </div>
 </div>
 <div className={style?styles.ul:styles.showul}>

<div style={{display:"flex",flexDirection:"column",gap:-100}}>
<p onClick={call}><Link href="/" className="link" style={{marginLeft:16}}>Home</Link></p>
{user?
  <div
  style={{display:"flex",flexDirection:"column",textDecoration:"none",color:"white",marginLeft:20}}
  >
  <p><Link href="/login" className="link">Login</Link></p>
  <p><Link href="/signup" className="link">Sign up</Link></p>
  </div>:
  <p onClick={Logout} style={{marginLeft:20}} >Logout</p>
  }
</div>
 <ul>
  <li>_</li>
 <li onClick={call}><Link href="/Navbar/premium" className="link">Premium</Link></li>
 <li onClick={call}><Link href="/Navbar/help" className="link">Help</Link></li>
 <li onClick={call}><Link href="/Navbar/download" className="link">Download</Link></li>
  <li onClick={call}><Link href="/legal/privacy-policy" className="link">Privacy</Link></li>
 <li onClick={call}><Link href="/terms" className="link">Terms</Link></li>
 </ul>

  </div>
 </div>
   );
}