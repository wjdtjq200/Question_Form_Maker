import {combineReducers} from 'redux';
import QUESTION from './question';
import question from './question';


const appReducer = combineReducers({
  question,
})

const rootReducer = (state, action) => {
    if (action.type === QUESTION) {
      state = undefined;
    }

    return appReducer(state, action);
  };
  
  export default rootReducer
