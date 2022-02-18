import React from 'react';
import ReactDOM from 'react-dom';
import Posts from "./Posts.jsx";
import { Name } from './Name.jsx';
import {App} from './App.jsx'

function Home() {
    return (
      <div >
          <h1>Home Page</h1>
          <App/>
          <Name />
        <Posts/>
        
      </div>
    );
  }

ReactDOM.render(<Home/>, document.getElementById('app'));