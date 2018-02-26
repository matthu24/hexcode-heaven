import React from 'react';
import { Link } from 'react-router-dom';


export default props => {
  let className = 'side-bar-item' + `${props.color.name}`;
  return(
    <li className={className}>
      <Link to={`/colors/${props.color.id}`}>
        {props.color.name}
      </Link>
    </li>
  )

}
