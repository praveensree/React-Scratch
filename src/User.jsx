import axios from 'axios'
import React ,{useState, useEffect} from 'react'


export default function User() {
    const [Peoples, setPeoples]=new useState([])
    useEffect(()=>{
        axios.get('http://localhost:10807/api/Hospital').then((response)=>setPeoples(response.data));
    },[]);
  return (
    <div>
        <h1>Users</h1>
       
        <table border="1" border-collapse="collapse">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Contact</th>
            </tr>
            {Peoples.map((people)=>(
            <tr key={people.id}>
                <td>{people.Name}</td>
                <td>{people.Age}</td>
                <td>{people.Contact}</td>
            </tr>
            ))}
        </table>
        
    </div>
  )
}