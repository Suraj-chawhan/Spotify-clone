import {createStore} from 'redux'


const reducerFunction=(state={val:true},action)=>{
  if(action.type==="Change"){
    return {val:action.payload}
  }
  else{
    return state
  }
}
const store=createStore(reducerFunction)

export default store