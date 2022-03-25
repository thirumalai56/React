import {combineReducers} from 'redux';
import pizza from './PizzaReducer';
import coffee from './CoffeeReducer';
const rootReducer =  combineReducers({pizza,coffee});

export default rootReducer;