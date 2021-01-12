import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";


const initialState = {
    tasks: [{name: 'hello', id: Math.random()}]
}

const reducers = (state = initialState, action) => {
  switch (action.type){
      case 'ADD_TASK':
          return {
              ...state,
              tasks: [...state.tasks,{name: action.payload, id: Math.random()}]
          }

      case 'UP_TASK':
       return {
           ...state,
           tasks: state.tasks.map((el,i) => {
               if (action.payload === i) return state.tasks[action.payload - 1]
               if(action.payload - 1 === i) return state.tasks[action.payload]
               return el
           })
       }

      case 'DOWN_TASK':
          return {
              ...state,
              tasks: state.tasks.map((el,i) => {
                  if(action.payload === i) return state.tasks[action.payload + 1]
                  if(action.payload + 1 === i) return state.tasks[action.payload]
                      return el
              })
          }

      default:
          return state
  }
}

const store = createStore(
    reducers,
    composeWithDevTools()
)

export default store