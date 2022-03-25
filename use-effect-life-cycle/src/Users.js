//https://gorest.co.in/rest-console.html
//Authorizataion Bearer token
import axios from 'axios';
import React,{useEffect,useState} from 'react';
import Posts from './Posts';
function Users(){
    const [usersResults,setUsersData]= useState([]);
    const [selectedUser,setSelectedUser] = useState("");
    function getPosts(user_id){
        console.log("Get Posts From "+user_id);
        setSelectedUser(user_id);
    }
    useEffect(()=>{
        axios.get('https://gorest.co.in/public-api/users', {
                headers: {
                    'Authorization': `Bearer Lzcdm4kHbqA2x0s4rC8MCuBls7uelRgi0aja`
                        }
                })
                .then((res) => {
                    console.log(res.data.result);
                    setUsersData(res.data.result);
                    })
                .catch((error) => {
                    console.error(error)
                })

    },[]);
    return <div> 
            <h1>Users</h1>
            {
            usersResults.map((user)=>{
            return (<div> 
                <div key={user.id} style={{backgroundColor:'greenyellow'}}> 
                <button onClick={()=>getPosts(user.id)}> {user.id} </button>
                <p> {user.first_name} {user.last_name}</p>
                <p> {user.phone}</p>
               </div>
               <div>
                {selectedUser == user.id ? <Posts user_id={selectedUser}/> :""}   
               </div>
               </div>
            )
            })
            }
            
        </div>;

}
export default Users;
/*
axios.get('https://api.github.com/user', {
  headers: {
    'Authorization': `token ${access_token}`
  }
})
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})

*/
