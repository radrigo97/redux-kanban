import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";


const initialState = {
    tasks: [{name: 'hello'}]
}

const reducers = (state = initialState, action) => {
  switch (action.type){
      case 'ADD_TASK':
          return {
              ...state,
              tasks: [...state.tasks,{name: action.payload, id: Math.random()}]
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