import {useRouter} from 'next/router'
import React from 'react'
import List from '../../Component/List.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../Component/Footer.js'
import {faHCheveron,faSearch,faChevronDown,faRepeat,faShuffle} from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import SearchmusicComponent from '../../Component/SearchmusicComponent.js'

export default function Search({music,musicBanner}){
  const [search,setSearch]=React.useState(null)
  const[current,setCurrent]=React.useState(0)
  const audioRef=React.useRef(null)
  const [playing,setPlaying]=React.useState(false)
  const [show,setShow]=React.useState(false)
  const[currentTime,setCurrentTime]=React.useState(0)
  const[repeat,setRepeat]=React.useState(false)
  const[shuffle,setShuffle]=React.useState(false)
  
  
  const router=useRouter()
  let input=""
  if(search!=null){
  input=search.toLowerCase()
  }
  const b=music.filter(val=>val.singer.startsWith(search===null||search===""?search:input))
   
  const banner=()=>{
    
    if(input!=""){
      const c=musicBanner.filter(value=>value.singer.startsWith(input))
     const d=c.map((value2)=>{
       return(
       
       <Link href={`/${value2.singer}`} style={{width:120,height:150, backgroundColor:"#222222",borderRadius:10}} key={value2.id}>
      <div style={{display:"flex",flexDirection:"column",gap:10,padding:10}}>
      <Image src={`/${value2.musicbanner}`} width={100} height={100} alt="description banner"/>
      <p>{value2.title}</p>
      </div>
      </Link>
         )
     })
     return d;
     
    }
   const e=musicBanner.map(val=>{
      return(
      
       <Link href={`/${val.singer}`}  style={{width:180,height:150, backgroundColor:"#222222",borderRadius:10}} key={val.id}>
      <div style={{display:"flex",flexDirection:"column",gap:10,padding:10}}>
      <Image src={`/${val.musicbanner}`} width={100} height={100} alt="banner"/>
      <p>{val.title}</p>
      </div>
      </Link>
      )
   })
   
   return e;
  }
    
   function  call(id){
     setCurrent(id-1)
     setShow(true)
     setPlaying(val=>!val)
   }
  
  //
  
  const Play=()=>{
   
   if(!playing){
     audioRef.current.play()
   }
   else{
     audioRef.current.pause()
   }
   setPlaying(val=>!val)
 }
 
 
React.useEffect(()=>{
 

 if(playing){
     audioRef.current.play()
  }
  else{
  audioRef.current.pause()
  }
  
},[playing,current])


  
  


 const handleRangeChange=(e)=>{
    const currentTime=parseFloat(e.target.value)
    audioRef.current.currentTime=currentTime;
    setCurrentTime(currentTime);
  }
 
 //Next & Prev & Check all properties
 
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
 
 
 //check repeat
 const check=repeat?
 <Image src="/repeat1.png" width={26} height={26} 
 onClick={()=>setRepeat(val=>!val)} style={{color:"white"}} className={styles.playmusicChildContainerImage} alt="repeat"></Image>
 :
 <FontAwesomeIcon icon={faRepeat} 
 onClick={()=>setRepeat(val=>!val)}/>
 
 //Shuffle
 const checkshuffle=shuffle?
<FontAwesomeIcon icon={faShuffle} onClick={()=>setShuffle(val=>!val)}  className={styles.playmusicChildContainer}/>:
<Image src="/notshuffle.png" width={18} height={18} 
 onClick={()=>setShuffle(val=>!val)} className={styles.playmusicChildContainerImage} alt="no shuffle" ></Image>
 
 

 return(
   <div style={{display:"flex",flexDirection:"column",gap:30,paddingTop:10,color:"white",position:"relative"}}>
    <audio  
    ref={audioRef} 
    src={`/Musicfiles/${music[current].musicurl}`}
    onTimeUpdate={handleTimeUpdate} 
    loop={repeat}
    />
    
   {show?
   <SearchmusicComponent audioRef={audioRef} 
   playing={playing}
   setPlaying={setPlaying}
   handleRangeChange={handleRangeChange}
   currentTime={currentTime}
   check={check}
   checkshuffle={checkshuffle}
   Play={Play}
   Next={Next}
   Prev={Prev}
   setShow={setShow}
   details={music[current].musicimg}
   />:""}
   <div className="searchbar">
    <FontAwesomeIcon
    icon={faChevronDown}
    onClick={()=>router.push("/")} 
    className={styles.back}
     />
    
    
    
    
   <input type="search"   
   val={search} 
   onChange={(e)=>setSearch(e.target.value)}   
   placeholder="search music"
   />
    <FontAwesomeIcon
    icon={faSearch}
    onClick={()=>router.push("/")} 
    className="searchicon"
     />
   </div>
   <div style={{display:"flex",gap:10,flexDirection:"column"}}>
   <h3>Playlist</h3>
    <div className={styles.searchBanner}>
    {banner()}
    </div>
    </div>
    <div>
   <h3>Search Result</h3>
   <div style={{display:"flex",flexDirection:"column",gap:20}}>
   
   {search===""?"":b.map(val=>{
   return(
   <div style={{height:93}} key={val.id}>
   <List val={val} call={call}/>
   </div>
   )
   })}
   </div>
   </div>
   </div>
   );
}



export async function getServerSideProps(){
  const response=await fetch("http://localhost:3000/api/musicdata/Music/music")
  const data=await response.json()
  const res=await fetch("http://localhost:3000/api/musicdata")
  const bannerData=await res.json()
  return{
    props:{
     musicBanner:bannerData,
     music:data,
    }
    
  }
  
}

Search.getLayout=function PageLayout(page){
  return(
    <div className={styles.layout}>
    {page}
    <div style={{display:"flex",justifyContent:"center"}}>
    <Footer/>
    </div>
    </div>
    )
}