import React from 'react';
import Search from './search/search_container';

class Nav extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
        <div className='nav'>

          <div className='nav-left'>
            <img src="https://s3.us-east-2.amazonaws.com/personalwebsite1/HelpfulHumanLogo.png" className='logo'/>
          </div>

          <div className='nav-right'>
            <Search/>
          </div>
        </div>

    )
  }
}

export default Nav
