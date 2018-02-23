import React from 'react';
import Nav from './nav';
import { Route, Switch } from 'react-router-dom';


const App = () => (
  <div>

    <Route path = "/" component={Nav} />
  </div>
)

export default App;
