import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';

// useContent chuong cuoi
import { ThemeProvider } from './ThemeContext';


// Context + useReducer
// làm ra phạm vi ngoài của đối tượng global
import {StoreProvider} from './store';




// fake comment ( tu phat di event)
// function emitComment(id){
//   setInterval(()=>{
//     // chủ động tự phát 1 event 
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`,{
//         // chuyền theo được value gì
//         detail:`bạn đó quá đẹp trai ${id}`
//       })
//     )
//   },2000)
// }

// emitComment(1)
// emitComment(2)
// emitComment(3)





// useContext chuong cuoi

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
// {/* useContent chuong cuoi */}
//   {/* <ThemeProvider> */}
//     <App />
//   {/* </ThemeProvider> */}
//   </React.StrictMode>
// );


// Context + useReducer
// làm ra phạm vi ngoài của đối tượng global
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals





// cài đặt cấu hình css/scss dựng base dự án tiktok
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <GlobalStyles> */}
//       <App />   
//     {/* </GlobalStyles> */}
//   </React.StrictMode>
// );

reportWebVitals();
