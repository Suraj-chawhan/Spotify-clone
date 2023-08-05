import dbconnect from '../../../Database/Connect.js'
import Blog from '../../../Database/Schema.js'

export default async function handler(req,res){
 if(req.method==='POST'){
   await dbconnect
  const {input,password}=req.body
  console.log(input,password)
  const data=new Blog({
   title:input,
   password:password,
   id:1,
  })
  
  data.save()
  res.status(200).json({succes:"success"})
 }
 else{
  res.status(200).json({unsucces:"unsucces"})
 }
}