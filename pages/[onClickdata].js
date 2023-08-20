import Image from 'next/image'
import styles from '../styles/home.module.css'
import React from 'react'
import {useRouter} from 'next/router'
import Playmusic from '../Component/Playmusic.js'
import Musiclist from '../Component/Musiclist.js'
import Footer from '../Component/Footer.js'
import Share from "../Component/Share.js"
import{FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import{faChevronDown}from '@fortawesome/free-solid-svg-icons'
import Err from './404.js'
import Clickinterface from '../Component/Clickinterface.js'

export default function OnClick({gotData,details,music}){
  console.log(gotData)

    const router=useRouter()
  if(!music){
    router.push("/404")
  }
 
   const[data,setData]=React.useState(music)
  const[repeat,setRepeat]=React.useState(false)
  const[shuffle,setShuffle]=React.useState(false)
  const audioRef=React.useRef(null)
  const [playing,setPlaying]=React.useState(false)
  const[current,setCurrent]=React.useState(0)
  const[showshare,setShowShare]=React.useState(false)
  const[currentTime,setCurrentTime]=React.useState(0)
  const [show,setShow]=React.useState(true)
  const[displayBottom,setDisplayBottom]=React.useState(false)

 const Play=()=>{
   
   if(!playing){
     
     audioRef.current.play()
     setDisplayBottom(true)
   }
   else{
     audioRef.current.pause()
   }
   setPlaying(val=>!val)
 }
 
 
React.useEffect(()=>{
 

 if(playing){
     audioRef.current.play()
     setDisplayBottom(true)
  }
  else{
  audioRef.current.pause()
  }
  
},[playing,current])

 

//Particular click music play function on list
  function handleClick(id){
    
    
    if(current===id){
      
      if(playing){
        setPlaying(false)
        
      }
      else{
        setPlaying(true)
      }
      
      return
      
    }
    
   setShow(true)
   setCurrent(id)
  setPlaying(true);
    }





  const handleRangeChange=(e)=>{
    const currentTime=parseFloat(e.target.value)
    audioRef.current.currentTime=currentTime;
    setCurrentTime(currentTime);
  }
  //Next click
const Next=()=>{
  if(shuffle){
    let random=Math.floor(Math.random()*music.length)
      while(random===current){
        random=Math.floor(Math.random()*music.length)
      }
      setCurrent(random)
  }
  else{
  if(current===music.length-1)
  {
    setCurrent(val=>(val+1)%music.length)
  }
  else
  {
  setCurrent(val=>val+1)
  }
  }
  }
  //Prev
const Prev=()=>{
  if(current===0){
  setCurrent(val=>(val+music.length-1)%music.length)
  }
  else
  {
  setCurrent(val=>val-1)
  }
}
const threeDot=()=>setShowShare(true)
const handleTimeUpdate = () => {
  if(audioRef.current.currentTime===audioRef.current.duration && !repeat){
    if(shuffle){
      let random=Math.floor(Math.random()*music.length)
      while(random===current){
        random=Math.floor(Math.random()*music.length)
      }
      alert(random)
      setCurrent(random)
      setCurrentTime(0)
    }
    else{
      Next()
      setCurrentTime(0)
    }
  }
    setCurrentTime(audioRef.current.currentTime);
  };

const getdata=music.map((value,index)=>{
 console.log(value.id)
return(
<div
key={value.id} 
onClick={()=>handleClick(index)}
>
<hr/>
<Musiclist title={value.title} number={index+1}  threeDot={threeDot}/>
</div>
)})

return(
<div style={{backgroundColor:"#111222"}}>

<div>
  <audio 
  ref={audioRef}
  src={`/Musicfiles/${music[current].musicurl}`}
  onTimeUpdate={handleTimeUpdate} 
  loop={repeat}
  />

 <div>
  {showshare?
  <div className={styles.playmusicshare}>
  <div style={{display:"flex",flexDirection:"column"}}>
  <p 
  onClick={()=>{setShowShare(val=>!val)}} 
  className={styles.backBtn}
  >Back</p>
  <div className={styles.backBtn}>
  <Share/>
  </div>
  </div>
  </div>:""
    }
<div className={styles.chevronTop}>
<FontAwesomeIcon icon={faChevronDown} className={styles.back} onClick={()=>router.back()}/>
<h3 onClick={threeDot} style={{marginRight:20}}>&#8942;</h3>
</div>
<Playmusic 
playing={playing}  Play={Play}
Next={Next} Prev={Prev}
currentTime={currentTime} 
handleRangeChange={handleRangeChange} 
audioRef={audioRef} 
repeat={repeat} 
setRepeat={setRepeat} 
shuffle={shuffle} setShuffle={setShuffle}
show={show}
setShow={setShow}
details={details}
displayBottom={displayBottom}
title={music[current].title}
setDisplayBottom={setDisplayBottom}
/>
<Clickinterface 
playing={playing} Play={Play} details={details}
/>
{getdata}
 <br/>
 </div></div>
 </div>
  );
}


    export async function getServerSideProps(context) {
  const { onClickdata } = context.params;

  try {
    const response = await fetch(`http://localhost:3000/api/musicdata/${onClickdata}`);
    
   /* if (!response.ok) {
      throw new Error('Failed to fetch music data');
    }*/

    const data = await response.json();

    if (!data || data.length === 0) {
      return {
        redirect: {
        destination: '/error/err', 
        permanent: false,
        },
      };
    }

    
    const res = await fetch(`http://localhost:3000/api/musicdata/description/${onClickdata}`);
    
   /* if (!res.ok) {
 
      throw new Error('Failed to fetch music details');
    }*/

    const musicDetails = await res.json();

    return {
      props: {
        music: data,
        details: musicDetails,
        gotData: true,
      },
    };
  } catch (error) {
    console.error('Error during data fetching:', error.message);

 return {
  redirect: {
  destination: '/error/err',
  permanent: false,
  }
  }
  }
  }

OnClick.getLayout=function PageLayout(page){
  return(
    <div className={styles.layout}>
   <div style={{paddingTop:5}}>
    {page}
   </div>
    </div>
    )
  
}