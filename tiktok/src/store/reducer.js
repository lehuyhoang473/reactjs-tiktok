

// import {ADD_TODO, SET_TODO_INPUT} from './constants'
// const initState = {
//     todos: [],
//     todoInput:'',
// }




// function reducer(state,action){
//     switch(action.type){
//         case SET_TODO_INPUT:
//             return{
//                 ...state,
//                 todoInput:action.payload
//             }
//         case ADD_TODO:
//             return{
//                 ...state,
//                 todos :[...state.todos , action.payload]
//             }
//         default:
//             throw new Error('invalid loi')
//     }
// }

// export {initState}
// export default reducer;





// context + reducer part 2
// import { SET_TODO, ADD_TODO, DEL_TODO, EDIT_TODO } from "./constants";
// const dataGetLocal = JSON.parse(localStorage.getItem("TodoList"));
// const initState = {
//   todo: "",
//   todoList: dataGetLocal ?? []
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case SET_TODO:
//       return {
//         ...state,
//         todo: action.payload
//       };
//     case ADD_TODO:
//       const dataSetLocal = JSON.stringify([...state.todoList, action.payload]);
//       localStorage.setItem("TodoList", dataSetLocal);
//       return {
//         ...state,
//         todoList: [...state.todoList, action.payload]
//       };
//     case DEL_TODO:
//       const prevTodoList = [...state.todoList];
//       prevTodoList.splice(action.payload, 1);
//       localStorage.setItem("TodoList", JSON.stringify(prevTodoList));
//       return {
//         ...state,
//         todoList: prevTodoList
//       };
//     case EDIT_TODO:
//       const newTodoList = [...state.todoList];
//       newTodoList[action.payload.index] = action.payload.todoEdit;
//       localStorage.setItem("TodoList", JSON.stringify(newTodoList));
//       return {
//         ...state,
//         todoList: newTodoList
//       };

//     default:
//       throw new Error("Invalid action.");
//   }
// }

// export { initState };
// export default reducer;





