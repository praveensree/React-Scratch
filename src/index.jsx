import React from 'react';
import ReactDOM from 'react-dom';
import Posts from "./Posts.jsx";
import { Name } from './Name.jsx';
import {App} from './App.jsx'
import Array from './Array.jsx'
import User from './User.jsx';
import AddDetails from './AddDetails.jsx';

function Home() {
    return (
      <div >
          <h1>Home Page</h1>
          <AddDetails/>
          <Array/>
          <App/>
          <Name />
        {/* <Posts name="Praveen"/>
         */}
         <User/>
      </div>
    );
  }

ReactDOM.render(<Home/>, document.getElementById('app'));