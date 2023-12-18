// import { useEffect , useLayoutEffect, useState } from "react";



// function Content(){
//     return(
//         <div>
//             bin thich pink
//         </div>
//     )
// }

// export default Content;



/** useEffect
 *  nắm chắc kiến thức cơ bản và nâng cao của javascript 
 *  Event: Add/ remove event listener
 *  Observer pattern : Subscribe / unsubscribe
 *  closure
 *  Timers: setInterval, setTimeout, ClearInterval, clearTimeout
 *  useState
 *  Mounted / unmounted
 *  ===
 * Call API
 * 
 * 
 * 1    Update DOM
 *  -   F8 blog title
 *  2. Call API
 *  3. Listen DOM events
 *  -    Scroll
 *  -   cuộn trang lên xuống
 *  -   resize
 *  4   cleanup
 *  -   remove listener / Unsubscribe
 *  -   clear timer
*/

// useEffect(callback, )it su dung
// - gọi callback mỗi khi component re-render
// - gọi callback sau khi component thêm element vào DOM

// useEffect(callback, []) 
// chỉ gọi callBack 1 lần sau khi component mounted

// useEffect(callback, [deps])
// callback sẽ được gọi lại mỗi khi deps thay đôi

// 1 Callback luôn được gọi sau khi component mounted
// 2 cleanup function luôn được gọi trước khi component unmounted
// 3 cleanup function luôn được gọi trước khi callBack (trừ)



// const tabs = ['posts','comments','albums']

// function Content(){
//     const [title,setTitle] = useState('')
//     const [posts,setPosts] = useState([])
//     const [type,setType] = useState('posts')
//     const [showGoToTop, setshowGoToTop] = useState(false)
    
//     // useEffect(callback, ) update lai dom title tieu de wedsite
//     // useEffect(() =>{
//     //     // document.title =title;
//     //     fetch (' https://jsonplaceholder.typicode.com/posts ')
//     //         .then(res => res.json())
//     //         .then(item => {
//     //             setPosts(item)
//     //         });
//     // },[])

//     // cach 2
//     useEffect(() =>{
//         // document.title =title;
//         fetch (`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(item => {
//                 setPosts(item)  
//             });
//     },[type])

//     useEffect(()=>{
//         const handleScroll = () =>{
//             // console.log(window.scrollY)
//             // setshowGoToTop(window.scrollY >= 1225)
//             // or   
//             if(window.scrollY  >= 1225){
//                 // show
//                 setshowGoToTop(true)
//             }else{
//                 // hide
//                 setshowGoToTop(false)
//             }
//         }
//         window.addEventListener('scroll',handleScroll)
//         // ham cleanup function
//         return () =>{
//             window.removeEventListener('scroll',handleScroll)
//         }
//     },[])

//     return(
//         <div>{tabs.map(a =>(
//                     <button 
//                         key={a}
//                     style={type === a ? {
//                         color: '#fff',
//                         backgroundColor: "#333"
//                     } :{}}
//                         onClick={() => setType(a)}
//                     >
//                         {a}
//                     </button>
//                 ))}
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>{posts.map(a =>(
//                         <li key={a.id}>
//                             {a.title || a.name}
//                         </li>
//                     ))}
//             </ul>
//             {showGoToTop && (
//                     <button style={{
//                         position: "fixed",
//                         right: 20,
//                         bottom: 20
//                     }}> 
//                         go to top
//                     </button>
//                 )}
//         </div>
//     )
// }

// export default Content;


// import React, { useEffect, useState } from 'react'
// const tabs = ['posts', 'comments', 'albums']
// export default function Content() {
//   const [job, setJob] = useState('')
//   const [jobs,setJobs] = useState(()=>{
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     return storageJobs ?? []
//   })
//   const [posts,setPosts] = useState([])
//   const [type,setType ]= useState('posts')
//   const [show,setShow] = useState(false)
//   const handleSubmit = ()=>{
//     setJobs(prev => {
//       const newJobs = [...prev,job]
//       const jsonJob = JSON.stringify(newJobs)
//       localStorage.setItem('jobs',jsonJob)
//       return newJobs
//     })
//     setJob('')
//   }

//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then(res=>res.json())
//       .then(callback => setPosts(callback))

//   },[type])

//   useEffect(()=>{
//     var handleScroll = ()=>{
//       if(window.scrollY >= 1000){
//         console.log(window.scrollY);
//         setShow(true)
//       }else{
//         setShow(false)
//       }
//     }
//     window.addEventListener('scroll',handleScroll)
//     return()=>{
//       window.removeEventListener('scroll',handleScroll)
//     }
//   },[])



//   const handleAutoCroll= ()=>{
//     document.body.scrollTop = 0
//     document.documentElement.scrollTop = 0
//   }


//   return (
//     <div>
//       <input 
//         value={job}
//         onChange={e => setJob(e.target.value)}
//       />
//       <ul>
//         {jobs.map((a,b)=>(
//           <li key={b}>{a}</li>
//         ))}
//       </ul>
//       <button onClick={handleSubmit}>in</button>
//         {
//           tabs.map((a,b)=>(

//             <button key={b}
//               style={type === a ?
//               {color:'red', backgroundColor:'#ccc'}:{}}
//               onClick={()=>setType(a)}
//             >
//               {a}
//             </button>
          
//           ))
//         }
//       {
//         posts.map((a,b)=>(
//           <li key={b}>
//             {a.name || a.title || a.body}
//           </li>
//         ))
//       }
      
//         {show && (
//             <button style={{
//                 position: "fixed",
//                 right: 20,
//                 bottom: 20
//             }}
//               onClick={handleAutoCroll}
//             > 
//                 go to top
//             </button>
//         )}
//     </div>
//   )
// }




// bai tap ngoai nhieu ngang
// function Ngang(){
//     const [width,setWidth ] = useState(window.innerWidth);
//     useEffect(()=>{
//         const handleWidth  = () =>{
//             setWidth(window.innerWidth)
//         }
//         window.addEventListener('resize', handleWidth)
//         return () =>{
//             window.removeEventListener('resize',handleWidth)
//         }
//     })
//     return(
//         <div>
//             {width}
//         </div>
//     )
// }
// export default Ngang;





// useEffect() with timer functions
// function Content(){
//     const [countdown,setCountdow] = useState ( 200)

//     useEffect(()=>{
//         const timeId = setInterval(()=>{
//             setCountdow(prev => prev - 1)
//             // console.log('countdow', countdown);
//         },1000)


//         return ()=>{
//             clearInterval(timeId)
//         }
//     },[])
//     // useEffect(()=>{
//     //     setTimeout(()=>{
//     //         // chọt 1 phần tử ở ngoài thì sẽ chảy chứ ko ngừng nếu sủ dụng setTimeout
//     //         setCountdow(countdown - 1) 
//     //         // console.log('countdow', countdown);
//     //     },1000)
//     // },[countdown])

//     return(
//         <div>
//             <h1>{countdown} </h1>
//         </div>
//     )
// }
// export default Content;






// thêm ví dụ
// function Content(){
//     const [avatar ,setAvatar] = useState()
//     useEffect(()=>{
//         return()=>{
//             avatar && URL.revokeObjectURL(avatar.preview)
//         }
//     },[avatar])
//     const handlePreviewAvatar = (e) =>{
//         const file = e.target.files[0]
//         file.preview =  URL.createObjectURL(file)
//         setAvatar(file)
//     }
//     return(
//         <div>
//             <input
//                 type="file"
//                 onChange={handlePreviewAvatar}
//             />
//             {avatar && (
//                 <img src={avatar.preview} alt="" width="80%" />
//             )}
//         </div>
//     )
// }
// export default Content;





// fake comment tao fen file index.js
// import { useEffect, useState } from "react";

// const lessons = [
//     {
//         id:1,
//         name:'le huy hoang'
//     },
//     {
//         id:2,
//         name:'kieu anh huy'
//     },
//     {
//         id:3,
//         name:'nguyen van vuong'
//     },
// ]
// // useEffect() with fake Chat App phần hỏi đáp
// function Content(){
//     const [lessonId, setLessonId] = useState(1)
//     const handleComment = ({detail})=>{
//         console.log(detail);
//     }
//     useEffect(()=>{
//         window.addEventListener(`lesson-${lessonId}` ,handleComment)
//         return()=>{
//             window.removeEventListener(`lesson-${lessonId}` ,handleComment)
//         }
//     },[lessonId])
//     return(
//         <div>
//             <ul>
//                 {lessons.map(lesson => (
//                         <li
//                             key={lesson.id}
//                             style={{
//                                 color: lessonId === lesson.id ? 'red': "#333"
//                             }}
//                             onClick={() => setLessonId(lesson.id)}
//                         >
//                             {lesson.name}
//                         </li>
//                     ))}
//             </ul>
//         </div>
//     )
// }
// export default Content;






/**  useLayoutEffect() hook
 * useState 
 *  -   cập nhập lại state
 *  -   cập nhập lại DOM (mutated -> dot bien)
 *  -   Render lại UL
 *  -   Gọi cleanup nế dép thay đổi
 *  -   Gọi useEffect callBack
 *  
 * useLayoutEffect rat it khi su dung
 *  -   cập nhập lại state
 *  -   cập nhập lại DOM (mutated)
 *  -   Gọi cleanup nế dép thay đổi (sync)
 *  -   Gọi useLayoutEffect callBack (sync)
 *  -   render lại UL
*/
// import { useEffect, useLayoutEffect , useState } from "react";
// function Content(){
//     const [ count, setCount] = useState(0)

//     useLayoutEffect(()=>{
//         if(count > 3){
//             setCount(0)
//         }
//     },[count])

//     const handleRun = () =>{
//         setCount(count + 1)
//     }
//     return(
//         <div>
//             <h1>{count}</h1>
//         <button onClick={handleRun}> run</button>
//         </div>
//     )
// }
// export default Content;




// useContext hook   chương cuối
// create Folder ThemeContent.js

// import Paragraph from './Paragraph'
// function Content(){
//     return(
//         <>
//             <Paragraph />
//         </>
//     )
// }

// export default Content;  



// import React from 'react'
// import Paragraph from "./Paragraph"
// export default function Content() {
//   return (
//     <>
//       <Paragraph/>
//     </>
//     )
// }
