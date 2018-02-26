import React from 'react';
import Nav from './nav';
import { Route, Switch } from 'react-router-dom';
import SideBarContainer from './side_bar/side_bar_container';
import ColorsShowContainer from './side_bar/colors_show_container';
import HexShowContainer from './hex/hex_show_container';

const App = () => (
  <div>
    <Route path = "/" component={Nav} />
    <Route path = "/" component={SideBarContainer} />
    <Switch>
      <Route exact path = "/colors/:colorId" component={ColorsShowContainer}/>
      <Route exact path = "/hex/:code" component={HexShowContainer}/>

    </Switch>
  </div>
)

export default App;
