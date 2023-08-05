import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {app} from './Firebase.js'
import { getAuth,signOut,onAuthStateChanged} from "firebase/auth";
import {faHome,faSearch} from '@fortawesome/free-solid-svg-icons'
import {useRouter} from 'next/router'
import styles from '../styles/home.module.css'
import React from 'react'
import {useSelector} from  'react-redux'
import {useDispatch} from 'react-redux'


export default function Sidebar(){
  const auth=getAuth(app);
  const dispatch=useDispatch()
  const router=useRouter()
 const [user,setUser]=React.useState(false)
 
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
   
  
  
 
 
  const Logout=async ()=>{
    await signOut(auth)
  }
  
  return(
    <div className={styles.footerTopMaxwidth}>
    <div
    style={{color:"#aaaaaa",display:"flex",
    gap:20,alignItems:"center",marginLeft:-15}}
    onClick={()=>router.push("/")}
    >
    <FontAwesomeIcon icon={faHome}/>
    <p>HOME</p>
    </div>
    <div 
    style={{color:"white",display:"flex",
    gap:20,alignItems:"center"}}
    onClick={()=>router.push("/search")}
    >
    <FontAwesomeIcon icon={faSearch}/>
    <p>SEARCH</p>
    </div>
    {user?
    <div style={{display:"flex",gap:10}}>
    <button 
    className={styles.sidebarBtn}
    onClick={()=>router.push("/login")}
    >
    LOGIN
    </button>
    <button
    className={styles.sidebarBtn}
    onClick={()=>router.push("/signup")}
    >
    SIGNUP
    </button>
    </div>
    :
    <button
    className={styles.sidebarBtn}
    onClick={Logout}
    >
    LOGOUT
    </button>}
    </div>
    )
}