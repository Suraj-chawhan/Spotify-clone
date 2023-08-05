import Suggest from '../Component/Suggest.js'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/home.module.css'
import FindBanner from '../Component/FindBanner'
import {app} from   '../Component/Firebase.js'
import {getAuth,onAuthStateChanged} from "firebase/auth";
import {useDispatch} from 'react-redux'

export default function Home({music}) {

  
 
  return (
    <div className={styles.container}>
    <h3>Punjabi Music</h3>
    <div >
      <FindBanner music={music} song="punjabi"/>
    </div>
    <h3>Hollywood music</h3>
    <div>
       <FindBanner music={music} song="hollywood"/>
    </div>
    <h3>Bollywood music</h3>
    <div>
      <FindBanner music={music} song="bollywood"/>
    </div>
    <h3>Rap music</h3>
    <div>
     <FindBanner music={music} song="rapper"/>
    </div>
    <br />
    <Suggest/>
    </div>
  )
}


export async function getServerSideProps(){
  const response=await fetch("http://localhost:3000/api/musicdata")
  const data=await response.json()
  return{
    
    props:{
     music:data,
    }
    
  }
  
}