import { combineReducers } from 'redux';
import FoodsReducer from './foods';

const rootReducer = combineReducers({
  foods: FoodsReducer
});

export default rootReducer;
