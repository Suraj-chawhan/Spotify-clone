import React from 'react'
import styles from '../../styles/home.module.css'
import {useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import{app} from '../../Component/Firebase.js'
import { getAuth,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,FacebookAuthProvider,AuthErrorCodes,onAuthStateChanged} from "firebase/auth";
import {useRouter} from "next/router"

export default function LoginInterface(){
  
  const router =useRouter()
  const [user,setUser]=React.useState(false)
  const [input,setInput]=React.useState("");
  const[error,setError]=React.useState(false)
  const [password,setPassword]=React.useState("")
  const auth = getAuth(app);
  const[userPresent,setUserPresent]=React.useState(false)
  const[showPass,setShowPass]=React.useState(false)
  
  
 function Login(){
  signInWithEmailAndPassword(auth,input,password)
  .then((userCredential) => {
    const user = userCredential.user;
    router.push("/")
  })
  .catch((err) => {
    console.log(err)
    console.log(AuthErrorCodes)
      if(err.code===AuthErrorCodes.INVALID_PASSWORD){
        setError(true)
       }
  });
  }
    
 return(
   <div className={styles.loginForm}>
   <div className={styles.loginFormChild}>
   <Image 
   src="/spotifylogo.png" 
   width={140} height={40} 
   style={{marginTop:130}}
   alt="spotifylogo"
   />
   <h1>Login To Spotify</h1>
  
   <div className={styles.loginFormGrandChild}>
 
   <div className={styles.loginFormChildGrandChild}>
   <label style={{fontSize:30}}>Email or Username</label>
   <input 
   type="text" value={input} 
   onChange={(e)=>setInput(e.target.value) }  
   placeholder="Enter Email"
   
   />
</div>
<div className={styles.loginFormChildGrandChild}>
 <label style={{fontSize:30}}>Password</label>
 <input 
  type={showPass?"text":"password"} value={password} 
  onChange={(e)=>setPassword(e.target.value)}
  placeholder="Enter Password"
   />
   <div style={{display:"flex",gap:10,alignItems:"center",fontSize:20}}>
    <h1>Show</h1>
    <input type="checkbox" value={showPass} onChange={()=>setShowPass(val=>!val)} style={{width:25,height:28,backgroundColor:"blue"}}/> 
  </div>
 <p style={{color:"red",fontSize:18}}>
 {error?"Wrong password please try again":"" || userPresent?"User not present please signup":""}
 </p>
   </div>
   <br />
   
   <button 
   onClick={Login} 
   className={styles.loginBtn}
   >
   Login In
   </button>
   <div style={{marginLeft:50}}>
   <p>Dont have an account ?</p>
   <Link 
   href="/signup" 
   style={{color:"white"}}
   >
   Signup to Spotify
   </Link>
   </div>
   </div>
  </div>
   </div>
   );
   }

LoginInterface.getLayout=function PageLayout(page){
  return(
    <div>
    {page}
    </div>
    )
}
    
    
    


