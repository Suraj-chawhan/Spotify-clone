import {musicBanner} from '../../../Data/musicdata.js'


export default function handler(req,res){
  res.status(200).json(musicBanner)
}