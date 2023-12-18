// import {SET_JOB,ADD_JOB,DELETE_JOB} from './contants'




// // Init state
// export const initState = {
//     job:'',
//     jobs: []
// }
  

// // Reducer
// const reducer = (state,action) =>{
//     // console.log(action);
//     // console.log(state);

// switch(action.type){
//     case SET_JOB:
//     // object de bao luu
//         return   {
//             ...state,
//             job:action.payload
//         }
//         break;
//     case ADD_JOB:
//         return  {
//             ...state,
//             jobs:[...state.jobs, action.payload]
//         }
//         break;
//     case DELETE_JOB:

//     const newjobs = [...state.jobs]

//     // action mang thoe payload laf index
//         newjobs.splice(action.payload,1)
//         return  {
//             ...state,
//             jobs:newjobs
//         }
//         break;
//     default:
//         throw new Error('loi')
// }

// // console.log('new state', newjob)
// }

// export default reducer;
