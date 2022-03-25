const pizzas = {pizza_count:100};
const pizzaReducer = (state=pizzas,action)=>{

    if(action.type==="BUY_CAKE"){
        return state.cakes-1;
    }
    return state;
}
export default pizzaReducer