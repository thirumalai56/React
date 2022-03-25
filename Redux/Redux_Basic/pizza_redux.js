const {createStore} = require("redux");

const PIZZAS        = ['Cheeze','Chicken','Corn','Veg'];
const reducer       = (state,action)=>{
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

var pizzaStore      = createStore(reducer,PIZZAS);
console.log("Pizzas in Store =>"+pizzaStore.getState());
pizzaStore.dispatch({type:'BUY_PIZZA'});

console.log("After Buying Pizza from Pizza Store --> " + pizzaStore.getState());

pizzaStore.dispatch({type:'ADD_PIZZA'});

console.log("After Adding Pizza To Pizza Store --> " + pizzaStore.getState());


pizzaStore.dispatch({type:'REMOVE_PIZZA'});
console.log("After Removing Pizza from Pizza Store --> " + pizzaStore.getState());