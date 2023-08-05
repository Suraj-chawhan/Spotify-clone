

export default function Musiclist({title,number,threeDot}){
  
  return(
    <div style={{ display:'flex', justifyContent:'space-between',alignItems:'center',fontSize:30, backgroundColor:'#222222', height:70,borderRadius:5}}>
    <div style={{display:'flex', gap:10,alignItems:'center', color:"white"}}>
    <h4 >{number}</h4>
    <p>{title}</p>
    </div>
    <p  onClick={threeDot} style={{marginRight:10}}>&#8942;</p>
    </div>
    )
  
  
}


