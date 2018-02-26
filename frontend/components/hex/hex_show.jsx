import React from 'react';
import { Link, Route } from 'react-router-dom';


class HexShow extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    let color = '#' + this.props.match.params.code;
    return(
      <div  className='detail'>
        <div className='detail-components'>
          <div className='detail-swatch' style={{backgroundColor:color}}>

          </div>
          <div className='detail-info'>
            #{this.props.match.params.code}

          </div>

          <Link className='back'  to='/'>
            Back
          </Link>
        </div>

      </div>
    )
  }
}

export default HexShow;
