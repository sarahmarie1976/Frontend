import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Project from './components/Project';

import User from './components/User';
import PrivateRoute from './components/PrivateRoute';
import TestProjectsFetch from './components/TestProjectsFetch'
import ProjectForm from './components/TestAddProject'
import './App.css';
import TestRegister from './components/TestRegister'


export default function App() {
  

  return (
    <Router>
      
      <div className="App">
        <PrivateRoute exact path="/projects"  component={Project}  />
       
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/" component={Login} />
<Route exact path="/fetch" component={TestProjectsFetch} />
 <Route exact path='/addproject' component={ProjectForm} />
        {/* 
          Build a PrivateRoute component that will 
          display Projects  when you're authenticated 
        */}
        
      </div>
    </Router>
  );
}


