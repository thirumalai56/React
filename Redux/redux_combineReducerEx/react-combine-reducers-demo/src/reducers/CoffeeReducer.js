const noOfCoffees = {coffee:500};
const coffeeReducer = (state=noOfCoffees,action)=>{
    if(action.type==="BUY_COFFEE"){
        let coffeeCount = state.coffee -1; 
        return {coffee:coffeeCount};

    }
    return state;

}
export default coffeeReducer