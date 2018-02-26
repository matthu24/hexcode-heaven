import React from 'react';
import Nav from './nav';
import { Route, Switch } from 'react-router-dom';
import SideBarContainer from './side_bar/side_bar_container';
import ColorsShowContainer from './side_bar/colors_show_container';
import HexShowContainer from './hex/hex_show_container';
import GroupContainer from './group/group_container';
import Group2Container from './group/group2_container';

const App = () => (
  <div>
    <Route path = "/" component={Nav} />
    <Route path = "/" component={SideBarContainer} />

    <Switch>
      <Route exact path = "/" component={GroupContainer} />
      <Route exact path = "/groups/2" component={Group2Container} />


      <Route exact path = "/colors/:colorId" component={ColorsShowContainer}/>
      <Route exact path = "/hex/:code" component={HexShowContainer}/>

    </Switch>
  </div>
)

export default App;
