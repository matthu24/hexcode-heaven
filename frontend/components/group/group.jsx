import React from 'react';
import { Link, Route } from 'react-router-dom';


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
        <div>{this.props.groups[0].name}</div>
        <ul>
          {
            hexes.map((hex,id)=><li>{hex.code}</li>)
          }
        </ul>

      </div>
    )
  }
}

export default Group;
