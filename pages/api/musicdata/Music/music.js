import {musicList} from '../../../../Data/musicdata.js'

export default function handler(req,res){
res.status(200).json(musicList)
}