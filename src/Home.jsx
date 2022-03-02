import React from 'react';
import Posts from "./Posts.jsx";
import  Name  from './Name.jsx';
import Array from './Array.jsx'
import User from './User.jsx';
import AddDetails from './AddDetails.jsx';

function Home() {
    return (
        <div >
            <h1>Home Page</h1>
            <AddDetails />
            <Array />
            <Name />
            <Posts />
            <User />
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
