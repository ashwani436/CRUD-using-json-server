import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Home'
import Adduser from './pages/Adduser';
import EditUser from './pages/EditUser';

function App() {
  return (
    <div>
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/adduser" component={Adduser}/>
        <Route exact path="/edituser" component={EditUser}/>
      </Switch>
      
    </div>
  )
}

export default App;
