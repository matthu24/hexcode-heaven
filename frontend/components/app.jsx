import React from 'react';
import Nav from './nav';
import { Route, Switch } from 'react-router-dom';
import SideBar from './side_bar';


const App = () => (
  <div>
    <Route path = "/" component={Nav} />
    <Route path = "/" component={SideBar} />
  </div>
)

export default App;
