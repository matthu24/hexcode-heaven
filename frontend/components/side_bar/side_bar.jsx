import React from 'react';
import SideBarItem from './side_bar_item';
import { Link, Route } from 'react-router-dom';



class SideBar extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchColors();
  }
  render(){
    let codes =[];
    this.props.colors.forEach(color => {
      Object.values(color.hexes).forEach(hex => {
        codes.push(hex.code);
      })
    })
    let randomNum = Math.floor(Math.random()*112);
    let code = codes[randomNum]
    return(
      <div className='side-bar'>
        <div className='side-bar-components'>
          <Link className='random' to={`/hex/${code}`}>Random Color</Link>
          <ul className='sidebar-list'>
            {
              this.props.colors.map((color,id) =>
                <SideBarItem color={color} key={id}/>
              )
            }
          </ul>
        </div>


      </div>
    )
  }
}

export default SideBar
