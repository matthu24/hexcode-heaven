import React from 'react';

class Nav extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    // var randomColor = Math.floor(Math.random()*16777215).toString(16);
    // <img src="logo-symbol.svg" className='logo'/>

    return(
      <div className='nav'>

        <div className='nav-left'>
          H
        </div>

        <div className='nav-right'>
          <input placeholder='Search' className='search' type='text'></input>
        </div>
      </div>
    )
  }
}

export default Nav
