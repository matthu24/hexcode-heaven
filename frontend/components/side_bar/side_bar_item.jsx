import React from 'react';
import { Link } from 'react-router-dom';


export default props => {
  return(
    <li className='side-bar-item'>
      <Link to={`/colors/${props.color.id}`}>
        {props.color.name}
      </Link>
    </li>
  )

}
