//This Program is to demonstrate the errors that occur 
// incase of the combineReducers.

const {createStore} = require("redux");
const {combineReducers} = require("redux");

const pizzaStore = 
['Cheeze','Chicken','Corn','Veg'];

const coffeeStore = ['Capitchono','ColdCof','HotCoffee'];
const store = {pizza:pizzaStore,coffee:coffeeStore};
const pizzaReducer       = (state,action)=>{
		console.log(state);
		/*console.log(JSON.stringify(state));
		let pizzaState = state["pizza"];
		console.log(pizzaState); */
		if(action.type ==="BUY_PIZZA"){
			let pizzaToBuy = "Cheeze";
			return pizzaState.filter(pizza => (pizza!=pizzaToBuy));
		}
	    if(action.type === "ADD_PIZZA"){
			let newPizza = "Mango";
			return [newPizza,...pizzaState];
		}
	    if(action.type === "REMOVE_PIZZA"){
			
			let pizzaToRemove = 'Corn';
			return pizzaState.filter(pizza => (pizza!==pizzaToRemove));
		}
		return state;
	 
}

const coffeeReducer = (state,action)=>{
	    //let coffeeState = state.coffee;
		if(action.type ==="BUY_COFFEE"){
			let coffeeToBuy = "ColdCof";
			return state.filter(coffee => (coffee!=coffeeToBuy));
		}
	    
	return state;
}

const rootReducer = combineReducers({pizza:pizzaReducer,coffee:coffeeReducer});
var pizzaCoffeeStore      = createStore(rootReducer,store);
console.log("Pizzas in Store =>"+JSON.stringify(pizzaCoffeeStore.getState()));
pizzaCoffeeStore.dispatch({type:'BUY_PIZZA'});

console.log("After Buying Pizza from Pizza Store --> " + JSON.stringify(pizzaCoffeeStore.getState()));

pizzaCoffeeStore.dispatch({type:'ADD_PIZZA'});

console.log("After Adding Pizza To Pizza Store --> " + pizzaCoffeeStore.getState());


pizzaCoffeeStore.dispatch({type:'REMOVE_PIZZA'});
console.log("After Removing Pizza from Pizza Store --> " + pizzaCoffeeStore.getState());


pizzaCoffeeStore.dispatch({type:"BUY_COFFEE"});
console.log("After Removing Pizza from Pizza Store --> " + pizzaCoffeeStore.getState());