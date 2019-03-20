import { handleActions } from 'redux-actions'
import { GETITEMS_HOT } from '../types/movie'


export default handleActions({
  [GETITEMS_HOT] (state, action) {
    // console.log(action)
    return {
      ...state,
      items_hot: [...state.items_hot ,...action.payload]
    }
  }
}, 
{
  items_hot: []
})
// 类似于之前的---------------
// const defaultValue={
//   items_hot:[]
// }

// export default (state=defaultValue,action)=>{
//   switch(action.type){
//       case GETITEMS_HOT:{
//         console.log(1)
//         return {
//           items_hot:[...state.items_hot,...action.payload]
//         }
//       }
//       default:
//           return state
//   }
// }