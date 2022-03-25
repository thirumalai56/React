const {createStore,applyMiddleware} = require("redux");
const thunk 	= require('redux-thunk');
//console.log('Thunk Middle Ware is ',thunk);
const middleware = applyMiddleware(thunk);
const axios = require('axios');

const initialState = {
	loading :false,
	loaded :false,
	posts:[],
	error:null
}
const reducer = (state=initialState,action)=>{
	//console.log(action);
	 if(action.type ==="FETCH_POSTS_START")
			return {...state,loading:true};
	 if(action.type ==="RECIEVE_POSTS"){
			//console.log(action);
			return {...state,loaded:true,loading:false,posts:action.payload};
	 }
	 if(action.type ==="FETCH_POSTS_ERROR")
			return {...state,loading:false};
	 
	return state;
}

var store = createStore(reducer,applyMiddleware(thunk.default));

//console.log(store);
const getPosts = (dispatch,getState)=>{
	    console.log('dispatch log ',dispatch,getState);
		dispatch({type:"FETCH_POSTS_START"});
		axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(postsResponse => 
                        {
			//console.log('posts',postsResponse);
			 //Second Action Dispatch
                        return  dispatch({type:"RECIEVE_POSTS",payload:postsResponse.data});
                        })
                    .catch(reason=>{
                        //Third Action Dispatch
                        dispatch({type:"FETCH_POSTS_ERROR",error:reason})
                    });
	
};
store.subscribe(()=>{
	console.log(store.getState());
})
store.dispatch(getPosts);
console.log(store.getState());

