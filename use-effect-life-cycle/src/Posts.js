import React,{useEffect,useState} from 'react';
import axios from 'axios';
//https://gorest.co.in/public-api/posts?user_id=12990
function Posts({user_id}){
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        console.log(`https://gorest.co.in/public-api/posts?user_id=${user_id}`);
        axios.get(`https://gorest.co.in/public-api/posts?user_id=${user_id}`, {
            headers: {
                'Authorization': `Bearer Lzcdm4kHbqA2x0s4rC8MCuBls7uelRgi0aja`
                    }
            })
            .then((res) => {
                console.log(res.data.result);
              //  setUsersData(res.data.result);
                })
            .catch((error) => {
                console.error(error)
            })
    },[user_id])
    return <h3>Posts {user_id}</h3>;
}
export default Posts;