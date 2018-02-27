import React from 'react';
import Nav from './nav';
import { Route, Switch } from 'react-router-dom';
import SideBarContainer from './side_bar/side_bar_container';
import ColorsShowContainer from './side_bar/colors_show_container';
import HexShowContainer from './hex/hex_show_container';
import GroupContainer from './group/group_container';
import Group2Container from './group/group2_container';
import Group3Container from './group/group3_container';
import Group4Container from './group/group4_container';
import Group5Container from './group/group5_container';
import Group6Container from './group/group6_container';
import Group7Container from './group/group7_container';



const App = () => (
  <div>
    <Route path = "/" component={Nav} />
    // <Route path = "/" component={SideBarContainer} />

    <Switch>

      <Route exact path = "/" component={GroupContainer} />
      <Route exact path = "/groups/2" component={Group2Container} />
      <Route exact path = "/groups/3" component={Group3Container} />
      <Route exact path = "/groups/4" component={Group4Container} />
      <Route exact path = "/groups/5" component={Group5Container} />
      <Route exact path = "/groups/6" component={Group6Container} />
      <Route exact path = "/groups/7" component={Group7Container} />
      <Route exact path = "/colors/:colorId" component={ColorsShowContainer}/>
      <Route exact path = "/hex/:code" component={HexShowContainer}/>

    </Switch>
  </div>
)

export default App;
