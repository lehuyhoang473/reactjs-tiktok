// import { useState } from 'react';
// import { useContext, useEffect, useMemo, useRef, useState, } from 'react';
// import './App.css';



// ứng dụng đến số useState
// import { useState } from 'react';

// order đơn hàng
// const orders = [100,200,300]

// function App() {
  // ví đụ 1
  // const total = orders.reduce((total,cur) => total + cur);
  // // console.log(total)
  // const [counter,setCounter] = useState(total);
  
  // ko cần tính lại
  // const [counter,setCounter] = useState(()=>{
  //   const total = orders.reduce((total,cur) => total + cur);
  //   console.log(total)

  //   // nó lấy return làm để khởi tạo chứ ko phải function
  //   return total
  // });
  // const handleIncrease = () =>{
  //   setCounter(counter + 1)
    
  //   // sử dụng callBack
  //   // setCounter(prevState => prevState + 1)
  //   // setCounter(prevState => prevState + 1)
  //   // setCounter(prevState => prevState + 1)
  // }
  // return (
  //   <div className="App" style={{padding: 20}}>
  //     <h1>{counter}</h1>
  //     <button onClick={handleIncrease}>Increase</button>
  //   </div>
  // );

  // const [info,setInfo] = useState({
  //   name:'le huy hoang',
  //   age:12,
  //   address: 'pleiku'
  // })

  // const handleUpdate = () =>{
  //   setInfo({
  //     ...info,
  //     bin:"thich pink"
  //   })
  // }

  // sử dụng callBack
  // const handleUpdate = () =>{
  //   setInfo(prev => ({
  //     ...prev,
  //     bin: 'thich black'
  //   }))
  // }
  // return (
  //   <div className="App" style={{padding: 20}}>
  //     <h1>{JSON.stringify(info)}</h1>
  //     <button onClick={handleUpdate}>change</button>
  //   </div>
  // );
// }
// export default App;





// bài tập random gift

// const gifts = [
//   'le huy hoang',
//   'bin be',
//   'bin bi khung'
// ]

// function App(){
//   const [gift,setGift] = useState();

//   const randomGift = () =>{
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index])
//   }
//   return(
//     <div style={{padding: 20}}>
//       <h1 > { gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={randomGift}>lấy phần thưởng</button>  
//     </div>
//   )
// }
// export default App;







// bài tập   thường để xử lý form
// Response from API

// function App(){
//   const [name,setName] = useState('')
//   const [email,setEmail] = useState('')

//   // console.log(name)

//   const handleSubmit = () =>{
//     // CALL API
//     console.log({
//       name,
//       email
//     })
//   }
  
//   return(
//     <div style={{padding: 20}}>
//       <input
//       value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       {/* <button onClick={() =>setName('le huy hoang')}>change</button> */}

//       <input
//       value={email}
//       onChange={e => setEmail(e.target.value)}
//       />

//       {/* làm thêm email */}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   )
// }

// export default App;



// Response from API ( name="course" nếu đặt trùng name thì sẽ radio 1 trong 3 thứ)
// radio
// const courses = [
//   {
//     id:1,
//     name:'html,css'
//   },
//   {
//     id:2,
//     name:'react'
//   },
//   {
//     id:3,
//     name:'javascript'
//   },
// ]
// function App(){
//   const [checked, setChecked] = useState(2)
//   const handleSubmit = () =>{
//     console.log({id: checked})
//   }
//   return(
//     <div style={{padding: 20}}> 
//       {courses.map(course => (
//         <div key={course.id}>
//           <input 
//           type='radio'  
//           checked={checked === course.id}
//           onChange={() => setChecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   )
// }

// export default App;


// checkbox
// const courses = [
//   {
//     id:1,
//     name:'html,css'
//   },
//   {
//     id:2,
//     name:'react'
//   },
//   {
//     id:3,
//     name:'javascript'
//   },
// ]
// function App(){
//   const [checked, setChecked] = useState([])
//   console.log(checked)
//   //   // prev lúc đâu là 1 mạng  trước đó khi click sẽ thêm id 1 và lấy tất cả và sẽ lấy thêm id 2 or 3
//   //   // bảo luu mảng củ thêm toán tử spread


//   // const handleCheck = (id) =>{
//   //   setChecked(prev => [...prev,id])
//   // }

//   // nếu mà check thì bỏ check nếu chưa check thì check
//   const handleCheck = (id) =>{
//     setChecked(prev => {
//       const isChecked =  checked.includes(id)
//       if(isChecked){
//         // unCheck
//         return checked.filter(item => item !== id)
//       }else{
//         return [...prev,id]
//       }
//     })
//   }
  
//   const handleSubmit = () =>{
//     // Call API
//     console.log({ids: checked})
//   }
  
//   return(
//     <div style={{padding: 20}}> 
//       {courses.map(course => (
//         <div key={course.id}>
//           <input 
//           type='checkbox'  
//           checked={checked.includes(course.id)}
//           onChange={() => handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   )
// }

// export default App;





// import { useState } from "react";

// // todolist
// function App(){
//   const [job , setJob] = useState('')
//   const [jobs,setJobs] = useState(() =>{
//     // lấy appication
//   const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//   // console.log(storageJobs)]
//   return storageJobs ?? []
//   });
//   // console.log(job )
//   const handleSubmit =() =>{
//     setJobs(prev => {
//       const newJobs = [...prev ,job]
//       const jsonJob = JSON.stringify(newJobs)
//       localStorage.setItem('jobs',jsonJob)
//       return newJobs
//     })
//     setJob('')
//   }
//   return(
//     <div style={{padding: 32}}>
//       <input value={job} 
//       onChange={ e => setJob(e.target.value)} 
//       />
//     <button onClick={handleSubmit}>add</button>
//     <ul>
//     {jobs.map((job,index) => (
//       <li key={index}> {job}</li>
//     ))}
//     </ul>
//     </div>
//   )
// }
// export default App;



/** useRef hook
 *   lưu các giá trị qua tham chiếu bên ngoài
 * lấy toả độ kích thước or element
 * muốn lấy value gì đó phải chọc vô current chỉ cần log là ra
 * function component
 * có tât cả các kính thước của wed
// */
// import {useState , useRef, useEffect} from 'react';
// function App(){
//     const [count,setCount] = useState(60)
//     // alway object -> prototype
//     // const ref =   (99)
//     // console.log(ref.current)
//     const h1Ref = useRef()
//     const timeIds  = useRef()
//     const prevCount = useRef()

//     useEffect(()=>{
//       prevCount.current = count
//       console.log(h1Ref.current)
//       console.log(prevCount.current)
//       // tự động cập nhập
//     const rect = h1Ref.current.getBoundingClientRect()
//       // console.log(rect);
//     })

//     const handleStart = ()=> {
//       timeIds.current = setInterval(()=>{
//         setCount(prev => prev - 1)
//       },1000)
//       // console.log(timeIds.current, 'start');
//     }
//     const handleStop= () =>{
//       clearInterval(timeIds.current)
//       // console.log(timeIds.current, 'stop');
//     }
//     // console.log(count,prevCount.current)

//     return(
//       <div style={{padding:50}}>
//         <h1 ref={h1Ref}>{count}</h1>
//         <button onClick={handleStart}>Start</button>
//         <button onClick={handleStop}>Stop</button>
//       </div>
//     )
// }
// export default App;





// Mounted & Unmounted? (function Content())
// gắn vào gở ra

// import React ,{useState} from 'react';
// import Content from './Content';
// function App(){
//   const [show,setShow] = useState(false)
//   return(
//     <div style={{padding :20}}>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//      {show && <Content /> }
//     </div>
//   )
// }

// export default App;




/** React.memo HOC
 * được gọi là ghi nhớ nhớ component tránh bị render không cần thiết
 *  tạo folder Comtent
 * memo()-> higher order component (HOC)
 * useCallback()
 *  cách viết
 *  :- Reference types
 *  :- React memo()
 *  : - === để so sánh
 * 
 * hay học
 * 
 * Hook gắn vào móc vào => function component
 * HOC  => thiết kế sự dụng function component -> classComponent
 * Render props -> 
*/
// import {useState , useCallback} from 'react';
// import Comtent from './Comtent';
// function App(){
//   const [count, setCount] = useState(0)
//   // đối số đầu tiền CallBack là hàm
//   // đối sô thứ 2 là mang chứa dependent
//   const handleIncrease = useCallback(() =>{
//     setCount( prev => prev + 1)
//   },[])
//   return(
//     <div style={{padding:50}}>
//       <Comtent  onIncrease={handleIncrease}/>
//       <h1>{count}</h1>
      
//     </div>
//   )
// }
// export default App;



// useMemo hook
// viết trong function component ( 
// tránh thực hiện lại 1 logic không cần thiết)


// import {useState,useMemo, useRef} from 'react';
// function App(){
//   const [name,setName] = useState('')
//   const [price,setPrice] = useState('')
//   const [products,setProducts] = useState([])
//   const nameRef = useRef()
//   const handleSubmit = ()=>{
//     setProducts([...products, {
//       name,
//       // price:parseInt(price)
//       price: +price
//     }])
//     setName('')
//     setPrice('')
//     nameRef.current.focus()
//   }
//   // tra ve string
//   // console.log(price)
//   // console.log(products)

//   const total = useMemo(() =>{
//     const result = products.reduce((a,b)=> {
//       // console.log('tinh toan lai');
//       return a + b.price 
//     },0)
//     return result
//   },[products])
  
//   return(
//     <div style={{padding:'50px 50px'}}>
//       <input
//       ref={nameRef}
//         value={name}
//         placeholder='enter name..'
//         onChange={e => setName(e.target.value)}
//       />
//       <input
//         value={price}
//         placeholder='enter price'
//         onChange={e => setPrice(e.target.value)}
//       />
//       <br />
//       <button onClick={handleSubmit}>add</button>
//       <br />
//       total:{total}
//         <ul>{products.map((a,b) =>(
//               <li key={b}>
//                 {a.name} - {a.price}
//               </li>
//             ))}
//         </ul>
//     </div>
//   )
// }
// export default App;




// useContext hook  
// context ComA => ComB => ComC
// tạo ra context
// Provider nhà cung cấp
// Consumer nhận dữ liệu cung cấp
// create Folder ThemeContent.js

// import { useContext } from 'react';
// import { ThemeContext } from './ThemeContext';
// import Content from './content';
// import './App.css' 
// // them dark - light

// export default function App(){
//   const context = useContext(ThemeContext)
//   return(
//     <div style={{padding:20}}>
//       <button onClick={context.toggleTheme}>  Toggle</button>
//       <Content />
//     </div>
//   )
// }





// import useReducer
// import vô method useReducer bên foler todo
// import TodoApp from './Todo'
// function App(){
//   return <TodoApp />
// }
// export default App;






// Context + useReducer
// làm ra phạm vi ngoài của đối tượng global

// import { useStore , actions} from './store';
// function App(){
//   const [state ,dispatch] = useStore()
//   const {todos,todoInput} = state
//   // console.log('todolis', todoInput);
//   // console.log(state);
//   const handleAdd = () =>{
//     dispatch(actions.addTodo(todoInput))
//   }
//   // console.log((todos));
//   return(
//     <div style={{padding: 50}}>
//       <input
//         value={state.todoInput}
//         placeholder='enter ...'
//         onChange={e => {
//           dispatch(actions.setTodoInput(e.target.value))
//         }}
//       />
//       <button onClick={handleAdd}>
//         add
//       </button>
//       {todos.map((a,b) =>(
//         <li key={b}>
//           {a}
//         </li>
//       ))}
//     </div>
//   )
// }
// export default App;








// useImperativeHandle hook
// điều chỉnh được ref của function component
// function component khong co ref

// import { useRef } from "react";
// import Video from './video';

// function App(){
//   const videoRef = useRef()
//   // useEffect(()=>{
//   //   console.log((videoRef.current));
//   // })
//   const handlePlay = ()=>{
//     videoRef.current.play()
//     // có thể rò rỉ bổ nhớ
//     // console.log(videoRef.current);
//     // console.log(videoRef.current.remove());
//   }
//   const handlePause = ()=>{
//     videoRef.current.pause()
//   }
//   return(
//     <div style={{padding : 100}}>
//       <Video  ref={videoRef}/>

//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Pause</button>
//     </div>
//   )
// }
// export default App





/** CSS MODULE or styled component
 * Tạo Folder Heading and Paragraph   
*/

// import Heading from "./components/Heading"
// import Paragraph from "./components/Paragraphs"

// function App(){
//   return(
//     <div style={{padding:100}}>
//       <Heading />
//       <Paragraph />
//     </div>
//   )
// }

// export default App










/**  CSS MODULE TIẾP THEO*/
// import Button from "./components/Button"
// import GlobalStyles from './components/GlobalStyles';
// function App(){
//   <GlobalStyles>
//     <div style={{padding:50}}>
//         <Button  />
//         <Button primary />
//     </div>
//   </GlobalStyles>
// }
// export default App;








// Context + useReducer part 2

// import { useContextStore, actions } from "./store";
// import { useRef, useState } from "react";
// export default function App() {
//   const [state, dispatch] = useContextStore();
//   const { todo, todoList } = state;
//   const [indexEdit, setIndexEdit] = useState();
//   const [todoEdit, setTodoEdit] = useState("");
//   const [type,setType] = useState(0)
//   const focusInput = useRef();
//   const handleSetAdd = () => {
//     if (todo === "") {
//         alert("Vui lòng nhập công việc");
//     } else {
//       dispatch(actions.addTodo(todo));
//       setType(type + 1)
//       dispatch(actions.setTodo(""));
//       focusInput.current.focus();
//     }
//   };
//   const handleSaveTodo = (index) => {
//     dispatch(actions.editTodo({ index, todoEdit }));
//     setTodoEdit("");
//     setIndexEdit();
//   };
//   // const handleIncrease= ()=>{
//   //   setType(type + 1)
//   // }
//   return (
//     <div style={{padding:50}} className="App">
//       <h1>Tìm hiểu kiến thức cùng lê huy hoang</h1>
//       <input
//         ref={focusInput}
//         placeholder="Enter your Todo..."
//         value={todo}
//         onChange={(e) => dispatch(actions.setTodo(e.target.value))}
//       />
//       <br/>
//       <button onClick={() => handleSetAdd()}>Add</button>
//          so bao danh{type}
//       <br/>
//       {/* <button onClick={handleIncrease}>
//         add
//       </button> */}
//       {todoList.map((item, index) => (
//         <li key={index} className="li">
//           {indexEdit === index ? (
//             <>
//               <input
//                 placeholder="Enter your edit..."
//                 defaultValue={item}
//                 onChange={(e) => setTodoEdit(e.target.value)}
//               />
//               <button onClick={() => handleSaveTodo(index)}>Save</button>
//             </>
//           ) : (
//             <>
//               {item}
//               <button
//                 className="del"
//                 onClick={() => dispatch(actions.delTodo(index))}
//               >
//                 Xóa
//               </button>
//               <button className="del" onClick={() => setIndexEdit(index)}>
//                 Edit
//               </button>
//             </>
//           )}
//         </li>
//       ))}
//     </div>
//   );
// }
















// useTransition (danh sách tiềm kiếm )
// import React, {  useState, useTransition } from 'react'
// const largeList = [
//   {id:1,product:'hand Mixer'},
//   {id:2,product:'furniture'},
//   {id:2,product:'huy hoàng'},
// ]
// export default function App() {
//   const [isPending,startTransition] = useTransition()
//   const [list,setList] = useState(largeList)
//   const [name,setName] = useState("")
//     // console.log(isPending);
//   function handleChange(e){
//     setName(e.target.value)
//     startTransition(()=>{
//       setList(largeList.filter(item=>item.product.includes(e.target.value)))
//     // console.log(isPending);
//     })
//   }
//   return (
//     <div>
//       <input 
//         type='text'
//         value={name}
//         onChange={handleChange}/>
//       {isPending ?
//         <div>loadding...</div>
//            :
//         list.map(item=><div key={item.id}>{item.product}</div>)}
//     </div>
//   )
// }










// useDeferredValue (nếu bấm vào giỏ hàng thì lập thức hiện trong phần danh 
// sách và ở trong trang đặt hàng)
// import React, { useState ,useDeferredValue} from 'react'
// export default function App() {
//   const [count,setCount] = useState(0)
//   const defaultCounter = useDeferredValue(count)
//   // useEffect(()=>{
//   //   console.log(`counter value: ${count}`);
//   //   console.log(`defaultCounter value: ${defaultCounter}`);
//   // })
//   return (
//     <div>
//       <div>advance component defaultCounter: {defaultCounter}</div>
//       <div>advance component counter: {count}</div>
//       <button onClick={()=>setCount(count+1)}>increment</button>
//     </div>
//   )
// }









// useId
// import React, { useId } from 'react'
// export default function App() {
//   return (
//     <div>
//       <Checkbox></Checkbox>
//       <Checkbox></Checkbox>
//     </div>
//   )
// }
// function Checkbox(){
//   const id = useId()
//   // const id1 = useId()
//   // console.log(id);
//   return(
//     <>
//       <label htmlFor={`${id}-name`}>do you like huy hoang dep trai</label>
//         <input id={`${id}-name`} type='checkbox' name='react'/>

//       <label htmlFor={`${id}-email`}>do you like huy hoang dep trai</label>
//         <input id={`${id}-email`} type='checkbox' name='react'/>
//     </>
//   )
// }











// useSyncExternalStore (có thể sử dụng useEffect)-> đo kích thước của màn hình
// import React, { useSyncExternalStore } from 'react'
// export default function App() {
  //   // const width = useSyncExternalStore(subscribe,getSnapshot,[getServerSnapshot])
//   const width = useSyncExternalStore((listener)=>{
//     window.addEventListener('resize',listener)
//     return()=>{
//       window.removeEventListener('resize',listener)
//     }
//   },()=>window.innerWidth)

//   return (
//     <div>
//       <p>size:{width}</p>
//     </div>
//   )
// }






// // custom hook
// import { useOnlineStatus } from './useOnlineStatus.js';

// function StatusBar() {
//   const isOnline = useOnlineStatus();
//   return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
// }

// function SaveButton() {
//   const isOnline = useOnlineStatus();

//   function handleSaveClick() {
//     console.log('✅ Progress saved');
//   }

//   return (
//     <button disabled={!isOnline} onClick={handleSaveClick}>
//       {isOnline ? 'Save progress' : 'Reconnecting...'}
//     </button>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <SaveButton />
//       <StatusBar />
//     </>
//   );
// }


// import { useState } from 'react';

// export default function Form() {
//   const [firstName, setFirstName] = useState('Mary');
//   const [lastName, setLastName] = useState('Poppins');

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }
//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }
//   return (
//     <>
//       <label>
//         First name:
//         <input value={firstName} onChange={handleFirstNameChange} />
//       </label>
//       <label>
//         Last name:
//         <input value={lastName} onChange={handleLastNameChange} />
//       </label>
//       <p><b>Good morning, {firstName} {lastName}.</b></p>
//     </>
//   );
// }














// Xây dựng dự án tiktok

// import { Fragment } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { publicRouter } from "~/routes";
// import { DefaultLayout } from "~/components/Layout";

// function App(){
//   return(
//     <Router>
//       <div style={{padding:50}}>
//         <Routes>
//           {publicRouter.map((route,index) => {
//             const Page = route.component
//             // const Layout = route.layout === null ? Fragment : DefaultLayout
//             // or
//             let Layout = DefaultLayout
//             if(route.layout){
//               Layout = route.layout
//             }else if(route.layout === null){
//               Layout = Fragment
//             }
//             return <Route  key={index} path={route.path} element={
//               <Layout>
//                 <Page />
//               </Layout>}/>
//           })}
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App;


