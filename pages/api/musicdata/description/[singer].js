import {musicDetails} from '../../../../Data/musicdata.js'


export default function handler(req,res){
  
  const singer=req.query.singer
  
  const details=musicDetails.find(val=>val.singer===singer)
  res.status(200).json(details)
}