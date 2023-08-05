
import {musicList} from '../../../Data/musicdata.js'
export default function handler(req,res){
  const singer=req.query.musicsinger
  console.log(singer)
  const musicdata=musicList.filter(val=>val.singer===singer)
  if(!musicdata){
  res.status(200).json([])
  }
  else{
    res.status(200).json(musicdata)
  }
}