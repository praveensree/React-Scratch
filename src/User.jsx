
import React from 'react'


const User = (props) => (
    
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Contact</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => 
                    <tr key={user.Id}>
                        <td>{user.Name}</td>
                        <td>{user.Age}</td>
                        <td>{user.Contact}</td>
                        <td>
                            <button className="button muted-button">Edit</button>
                            <button
                                onClick={() =>props.deleteUser(user.Id)}className="button muted-button">Delete</button>
                        </td>
                    </tr>
                )
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default User;