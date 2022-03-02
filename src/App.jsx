import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import SignInPage from './SignInPage.jsx';
import Home from './Home.jsx';
import './App.css'



const App = () => {
    return (
      <main className="app-wrapper">
       <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SignInPage}></Route>
  
            <Route exact path="/home" component={Home}></Route>
  
            
          </Switch>
          </BrowserRouter>
      </main>
    );
  };
  
  export default App;