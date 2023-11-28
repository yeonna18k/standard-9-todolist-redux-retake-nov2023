// import uuid from "react-uuid";
import shortid from "shortid";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};

const initialState = {
  todos: [
    {
      id: shortid.generate(),
      title: "redux",
      body: "1-13 강의듣기",
      isDone: false,
    },
    {
      id: shortid.generate(),
      title: "firebase",
      body: "auth 공부하기",
      isDone: true,
    },
  ],
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }; //TODO: 여기 작성

    case DELETE_TODO:
      return state;
    // state &&
    // state.todos.filter((todo) => {
    //   return todo.id != action.payload;
    // }) //TODO: 여기 작성

    case SWITCH_TODO:
      return state;
    // [...state.todos].map((todo) => {
    //   if (todo.id === action.payload) {
    //     return { ...todo, isDone: !todo.isDone }; //TODO: 여기 작성
    //   }
    // });
    default:
      return state;
  }
};

export default todos;
