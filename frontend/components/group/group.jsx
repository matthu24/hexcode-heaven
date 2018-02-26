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
        <ul className='group1-show'>
          {
            hexes.map((hex,id)=><HexItem key={id} hex={hex}/>)
          }
        </ul>
        <div >
          <ul className='paginate'>
            <li><Link to={'/'}>1</Link></li>
            <li>2</li>

            <li>3</li>

            <li>4</li>

            <li>5</li>

          </ul>
        </div>
      </div>
    )
  }
}

export default Group;
//
