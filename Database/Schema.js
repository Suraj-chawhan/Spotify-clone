const mongoose =require('mongoose')

const Schema=mongoose.Schema

const dataschema=new Schema({
  
  title:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  id:{
    type:Number,
    required:true,
  }
  
},{timestamps:true})
mongoose.models={}
const Blog=mongoose.model('Blog',dataschema)

export default Blog;
