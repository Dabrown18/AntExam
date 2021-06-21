import {combineReducers} from 'redux';
import antReducer from './AntReducer';

const rootReducer = combineReducers({
  ants: antReducer,
});

export default rootReducer;
