import mongoose from 'mongoose'
function dbconnect(){
   const url='mongodb+srv://surajchauhan442918:mongodb442917@cluster.yqxjvuf.mongodb.net/?retryWrites=true&w=majority'
  const db=mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
}
  
  export default dbconnect

