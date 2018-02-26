import React from 'react';
import SideBarItem from './side_bar_item';

class SideBar extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchColors();
  }
  render(){
    // var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return(
      <div className='side-bar'>
        <div className='side-bar-components'>
          <div className='button'>
            <button>Random Color</button>
          </div>
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
