import React from 'react';
import ReactDOM from 'react-dom';
import Posts from "./Posts.jsx";

function Home() {
    return (
      <div >
          <h1>Home Page</h1>
        <Posts/>
      </div>
    );
  }

ReactDOM.render(<Home/>, document.getElementById('app'));