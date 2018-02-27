import React from 'react';
import { Link, Route } from 'react-router-dom';
import HexItem from '../hex/hex_item';
import { NavLink } from 'react-router-dom';


class Group5 extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchSingleGroup(5);
  }

  render(){
    if(!this.props.groups[0]) return null;

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
            <li>
              <NavLink to='/' exact={true} activeStyle={{ textDecoration: 'underline' }}>1</NavLink>

            </li>
            <li>
              <NavLink to='/groups/2' exact={true} activeStyle={{ textDecoration: 'underline' }}>2</NavLink>
            </li>

            <li>
              <NavLink to='/groups/3' exact={true} activeStyle={{ textDecoration: 'underline' }}>3</NavLink>
            </li>

            <li>
              <NavLink to='/groups/4' exact={true} activeStyle={{ textDecoration: 'underline' }}>4</NavLink>
            </li>

            <li>
              <NavLink to='/groups/5' exact={true} activeStyle={{ textDecoration: 'underline' }}>5</NavLink>
            </li>

            <li>
              <NavLink to='/groups/6' exact={true} activeStyle={{ textDecoration: 'underline' }}>6</NavLink>
            </li>
            <li>
              <NavLink to='/groups/7' exact={true} activeStyle={{ textDecoration: 'underline' }}>7</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Group5;
