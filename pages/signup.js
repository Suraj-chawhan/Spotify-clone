import {app} from '../Component/Firebase.js'
import { getAuth,GoogleAuthProvider,signInWithPopup,FacebookAuthProvider,createUserWithEmailAndPassword,AuthErrorCodes,onAuthStateChanged} from "firebase/auth";
import Image from 'next/image'
import styles from "../styles/home.module.css"
import React from 'react'
import {useRouter} from "next/router"

export default function Signup(){

const router=useRouter()
const auth=getAuth(app);
const[email,setEmail]=React.useState("")
const[password,setPassword]=React.useState("")
const[error,setError]=React.useState(false)
 const[userExist,setUserExist]=React.useState(false)
 const[showPass,setShowPass]=React.useState(false)
  
 
 

  const signUp=()=>{
 createUserWithEmailAndPassword(auth,email,password)
   .then((userCredential)=>{
        const currentuser=userCredential.user
        if(currentuser){
          call(false)
          router.push("/")
        }
      })
     .catch((err)=>{
        setUserExist(true)
      })
      setEmail("")
      setPassword("")
 }


    
   
   React.useEffect(()=>{
 const monitorAuthChange=async()=>{
  await onAuthStateChanged(auth,currentUser=>{
     if(currentUser){
       router.push("/")
     }
    })
  }
 monitorAuthChange()
},[auth,router])
  
  
  return(
  /* <div className={styles.signupContainer}>
   
    
   <h1>Signup To Spotify</h1>

   
   
   <div className={styles.form}>
   <label>Email</label>
    <input 
    type="email" placeholder="Enter Email" 
    value={email} onChange={(e)=>setEmail(e.target.value)}
    />
    <label>Password</label>
    <input 
  type={showPass?"text":"password"} value={password} 
  onChange={(e)=>setPassword(e.target.value)}
  placeholder="Enter Password"
   />
   <div style={{display:"flex",gap:10,alignItems:"center",fontSize:20,marginLeft:-100}}>
    <h1>Show</h1>
    <input type="checkbox" value={showPass} onChange={()=>setShowPass(val=>!val)} style={{width:25,height:28,backgroundColor:"blue"}}/> 
  </div>
   <p style={{color:"red",fontSize:15}}>
   {userExist?"User exists":""}
   </p>
   <button onClick={signUp} className={styles.signUpBtn}>Signup</button>
   {
   userExist?
   <button onClick={()=>router.push("/")} className={styles.signUpBtn}>HOME</button>
   :""
   }
    </div>
    </div>*/



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
   type="text" value={email} 
   onChange={(e)=>setEmail(e.target.value) }  
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
 
 </p>
   </div>
   <p style={{color:"red",fontSize:15}}>
   {userExist?"User exists":""}
   </p>
   <button 
   onClick={signUp} 
   className={styles.loginBtn}
   >
   Signup
   </button>
   {
   userExist?
   <button onClick={()=>router.push("/")} className={styles.signUpBtn}>HOME</button>
   :""
   }
   </div>
  </div>
   </div>
   );
   }



Signup.getLayout=function PageLayout(page){
  return(
    <div>
    {page}
    </div>
    )
}



