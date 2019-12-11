import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Attendance from './components/Attendance/Attendance';
import Chat from './components/Chat/Chat';
import Routine from './components/Routine/Routine';
import Meals from './components/Meals/Meals';
import Contact from './components/Contact/contact';
import Monitoring from './components/Monitoring/Monitoring';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/chat' exact component={Chat} />
        <Route path='/attendance' exact component={Attendance} />
        <Route path='/routine' exact component={Routine} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/meals' exact component={Meals} />
        <Route path='/monitoring' exact component={Monitoring} />


        </Switch>
        
      </Router>
    );
  };
export default App;
