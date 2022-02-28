import React from 'react';
import Posts from "./Posts.jsx";
import  Name  from './Name.jsx';
import {App} from './App.jsx'
import Array from './Array.jsx'
import User from './User.jsx';
import AddDetails from './AddDetails.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Path(){
    return(
        <div>
            <BrowserRouter>
            <Switch>
            <Route path='/' exact component={<Name/>}></Route>
            <Route path='/Add' exact component={<AddDetails/>}></Route>
            <Route path='/User' exact component={<User/>}></Route>
            <Route path='/Post' exact component={<Posts/>}></Route>
            </Switch>
            </BrowserRouter>
        </div>
    );
}
export default Path;