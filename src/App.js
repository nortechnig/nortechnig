import React from 'react'


import Home from './components/Home';

import Pin from './students/Pin';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
}from 'react-router-dom';

function App() {
  return (
   

    <div className='bg-section'>
      
      <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pin" component={Pin} />
        </Switch>

        </Router>
    
     
    </div>
    
  );
}

export default App;
