import React from 'react';
import { Link, Route } from 'react-router-dom';


export default props => {
  let color = '#' + props.hex.code;

  return(
    <li>
      <div className='swatch-bundle'>
        <Link to={`/hex/${props.hex.code}`}>
          <div style={{backgroundColor:color}} className='swatch-item'></div>
          <div>#{props.hex.code}</div>
        </Link>
      </div>

    </li>
  )
}
