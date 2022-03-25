import React from 'react';
import axios from 'axios';
class User extends React.Component{

    constructor(){
        super();
        this.state = {users:[],error:"Error "};
    }
    render(){
        
        return(
            <div>
                <h1 style={{textAlign:'center',  color: '#61dafb'}}> Users</h1>
               
                {
                this.state.users.map(user=>{
                    return (
                    <div key={user.id} style = {{backgroundColor:'#000dff1a',textAlign:'center',boxShadow:'0 0 10px rgba(0,0,0,0.2)',marginRight:'10px',marginLeft:'10px'}}>
                        <p style={{paddingTop:'10px'}}>
                            <img style={{borderRadius: '50%'}} src={user.avatar}/></p>
                         <h1>{user.first_name +' '+ user.last_name} </h1>
                        <p style={{paddingBottom:'10px'}}> {user.email} </p>
                    </div>
                    );
                }
                )
                }
            </div>

        );
    }
    componentDidMount(){
        console.log("componentDidMount");
        axios.get("https://reqres.in/api/users")
             .then((response)=>{
                 this.setState({users:response.data.data});
             })
             .catch((error)=>{
                 console.log(this);
                 this.setState({error:error});
              });
    }

}   
export default User;