import React from 'react';
import { Link, Route } from 'react-router-dom';
import HexItem from '../hex/hex_item';
import { NavLink } from 'react-router-dom';
import  GroupReturn  from './group_return';


class Group7 extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchSingleGroup(51);
  }

  render(){
    if(!this.props.groups[0]) return null;
    let hexes = Object.values(this.props.groups[0].hexes)
    return(
      <GroupReturn hexes={hexes}/>
    )
  }
}

export default Group7;
