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

    const signUpWithGoogle=()=>{
     const provider = new GoogleAuthProvider();
      signInWithPopup(auth,provider)
      .then((response)=>{
        router.push("/")
      })
      .catch((err)=>{
        console.log(err.message)
        setUserExist(true)
      })
     
      }
      
 const signUpWithFacebook=()=>{
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth,provider)
      .then((response)=>{
        router.push("/")
      })
      .catch((err)=>{
        console.log(err.message)
        setUserExist(true)
      })
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
   <div className={styles.signupContainer}>
   
    
   <h1>Signup To Spotify</h1>

   <div 
    className={styles.signupProvider} 
   onClick={signUpWithGoogle}
   >
   <Image 
   src="/google.png" 
   width={35} height={35}
   alt="google"
   >
   </Image>
   <h3>Google</h3>
   </div>
    <div 
    className={styles.signupProvider} 
    onClick={signUpWithFacebook}
    >
   <Image
   src="/fb.png" 
   width={35} height={35}
   alt="facebook"
   />
   <h3>Facebook</h3>
   </div>
   
   
   <div className={styles.form}>
   <label>Email</label>
    <input 
    type="email" placeholder="Enter Email" 
    value={email} onChange={(e)=>setEmail(e.target.value)}
    />
    <label>Password</label>
    <input 
    type="password" placeholder="Enter Password" 
    value={password} 
    onChange={(e)=>setPassword(e.target.value)}
    />
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



