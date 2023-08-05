export default function Like(){
  return(
       <p onClick={()=>setLike(val=>!val)}>{like?'♥️':'🤍'}</p>
    )
}