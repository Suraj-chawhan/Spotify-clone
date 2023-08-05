import React from 'react'

export default function Timer(){
  let count=0;
  React.useEffect(()=>{
 setInterval(()=>{
   count++
 },1000)
  },[])

  return(
    <h1>{`Count is ${count}`}</h1>
    
    )
}