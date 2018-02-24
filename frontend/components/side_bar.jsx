import React from 'react';

class SideBar extends React.Component{
  constructor(props){
    super(props)
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
            <li>Red</li>
            <li>Orange</li>
            <li>Yellow</li>
            <li>Green</li>
            <li>Blue</li>
            <li>Purple</li>
            <li>Brown</li>
            <li>Gray</li>
          </ul>
        </div>


      </div>
    )
  }
}

export default SideBar
