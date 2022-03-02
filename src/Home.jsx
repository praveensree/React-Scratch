import React, {useState, useEffect} from 'react';
import Posts from "./Posts.jsx";
import  Name  from './Name.jsx';
import Array from './Array.jsx'
import User from './User.jsx';
import Table from './Table.jsx';
import AddDetails from './AddDetails.jsx';

import axios from 'axios';
function Home(props) {

    const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:10807/api/Hospital/").then((response)=>setUsers(response.data));
},[]);

function deleteUser(id){
    axios.delete("http://localhost:10807/api/Hospital/"+id).then
  
  ( res => {
    
    setUsers(users.filter((user )=> user.id !== id));
  })
  }
    return (
        <div >
           
            {/* <AddDetails />
            <Array />
            <Name />
            <Posts /> */}
            <Table/>
            {/* <User users ={users} deleteUser={deleteUser}/> */}
        </div>
    );
}

export default Home;
// import React from 'react';

// function Home(){
//     return (
//         <div>
//             <h1>Praveen</h1>
//         </div>
//     );

// }
// export default Home;
