import React from 'react';
import { Link, Route } from 'react-router-dom';
import HexItem from '../hex/hex_item';

class Group extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchSingleGroup(15);
  }

  render(){
    if(!this.props.groups[0]) return null;
      console.log(this.props.groups[0].name)

      let hexes = Object.values(this.props.groups[0].hexes)

    return(
      <div className='group1-index'>
        <ul>
          {
            hexes.map((hex,id)=><HexItem key={id} hex={hex}/>)
          }
        </ul>
      </div>
    )
  }
}

export default Group;
//
