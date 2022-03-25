const {createStore} = require("redux");
const {combineReducers} = require("redux");

const PIZZAS        = ['Cheeze','Chicken','Corn','Veg'];
const COFFEES       = ['capitchono','cold cof','HotCoffe'];

const pizzaReducer       = (state=PIZZAS,action)=>{
	    if(action.type ==="BUY_PIZZA"){
			let pizzaToBuy = "Cheeze";
			return state.filter(pizza => (pizza!=pizzaToBuy));
		}
	    if(action.type === "ADD_PIZZA"){
			let newPizza = "Mango";
			return [newPizza,...state];
		}
	    if(action.type === "REMOVE_PIZZA"){
			
			let pizzaToRemove = 'Corn';
			return state.filter(pizza => (pizza!==pizzaToRemove));
		}
		return state;
	 
}

const coffeeReducer = (state=COFFEES,action)=>{
	
		return state;
	
	};

const store = createStore(combineReducers({pizza:pizzaReducer,
				coffee:coffeeReducer}));
console.log(store.getState());

store.dispatch({type:"ADD_PIZZA"});

console.log(store.getState());