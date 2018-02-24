import React from 'react';
import Nav from './nav';
import { Route, Switch } from 'react-router-dom';
import SideBarContainer from './side_bar/side_bar_container';


const App = () => (
  <div>
    <Route path = "/" component={Nav} />
    <Route path = "/" component={SideBarContainer} />
  </div>
)

export default App;
