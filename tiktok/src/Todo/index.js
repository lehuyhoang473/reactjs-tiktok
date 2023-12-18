

/** useReducer hook giống useState
 * thư viện redux
 * sự khác nhau
 * useState:
 *  -  xác định giá trị khởi tạp -> Init state: 0
 *  - tăng lên và giảm đi -> Actions: up(state + 1) - down(state - 1)
 * 
 * useReducer
 *  Init state: 0 
 *  Actions
 *  Reducer
 *  Dispatch
*/



// import { useReducer } from 'react';

// //  * tạo ra init state
// const initState = 0;

// // actions
// const UP_ACTION = 'up';
// const DOWN_ACTION = 'down'

// // Reducer 2 đầu 1 đầu vào và đầu ra
// // action sẽ trả ra 1 là state, 2 là action
// // state là biến khởi tạo bởi initState
// // bảo lưu initState nếu ra mạng hãy ra mạng dưới switch

// const reducer  = (state, action) =>{
//   console.log('re-render');
//   switch(action){
//     case UP_ACTION:
//       return state + 1
//     case DOWN_ACTION:
//       return state - 1
//     default:
//       throw new Error('Invalid action')
//   }
// }

// function App(){
// //   có thể nhận 3 đối số
// //   initState count bằng 0 , đối số 2 là dispatch kích hoạt action up hay down
//   const [count, dispatch] = useReducer(reducer,initState)

//   return(
//     <div style={{padding: '10px 20px'}}>
//       <h1> {count}</h1>
//      {/* UP_ACTION LÁY LÀM ACTION Ở TRÊN REDUCER */}

//       <button 
//     //   chuyền vào 1 actions 
//       onClick={() => dispatch(DOWN_ACTION)}
//       >
//         Down
//       </button>
//       <button 
//       onClick={() => dispatch(UP_ACTION)}
//       >
//         Up
//       </button>
//     </div>
//   )
// }
// export default App;





// đã chia ra các component khác nha
/** 
// // Init state
// const initState = {
//   job:'',
//   jobs: []
// }
// // Actions
// const SET_JOB = 'set_job'
// const ADD_JOB = 'add_jobs'
// const DELETE_JOB = 'delete_jobs'

// // payload được gọi là mang theo đi
// const setjob = payload =>{
//   return{
//     type:SET_JOB,
//     payload
//   }
// }

// const addjob = payload =>{
//   return{
//     type:ADD_JOB,
//     payload
//   }
// }

// const deletejob = payload =>{
//   return{
//     type:DELETE_JOB,
//     payload
//   }
// }
// // console.log(setjob('danh nhau'))

// // Reducer
// const reducer = (state,action) =>{
//   // console.log(action);
//   // console.log(state);
//   let newjob
//   switch(action.type){
//     case SET_JOB:
//       // object de bao luu
//       newjob =  {
//         ...state,
//         job:action.payload
//       }
//       break;
//     case ADD_JOB:
//       newjob = {
//         ...state,
//         jobs:[...state.jobs, action.payload]
//       }
//       break;
//     case DELETE_JOB:
//     const newjobs = [...state.jobs]
//     // action mang thoe payload laf index
//     newjobs.splice(action.payload,1)
//     newjob = {
//         ...state,
//         jobs:newjobs
//       }
//       break;
//     default:
//       throw new Error('loi')
//   }
//   console.log('new state', newjob)
//   return newjob
// }
*/



// Init state
// Actions
// Reducer
// Dispatch

// Todo App with useReducer hook
// import { useReducer,useRef } from 'react';
// import reducer,  {initState} from './reducer'
// import { setJob,addJob,deleteJob } from './actions';
// import logger  from './logger';


// function App(){
//   const [state,dispatch] = useReducer(logger(reducer),initState);
//   const inputRef = useRef()
//   const { job, jobs} = state
//   // console.log(state);
//   const handleSubmit=  () =>{
//     dispatch(addJob(job))
//     dispatch(setJob(''))
//     inputRef.current.focus()
//   }
//   return(
//     <div style={{padding: '20px 20px'}}>
//       <h1>Todo</h1>
//       <input
//       ref={inputRef}
//         value={job}
//         onChange={e =>{
//           dispatch(setJob(e.target.value))
//         }}
//         placeholder="nhap vao"
//       />
//       <button onClick={handleSubmit} >add</button>
//       <ul>
//         {jobs.map((job,index)=>(
//             <li key={index}>
//               {job} 
//               <span onClick={() => dispatch(deleteJob(index))}>
//               &times;
//               </span>
//             </li>
//           ))}
//       </ul>
//     </div>
//   )
// }

// export default App;





