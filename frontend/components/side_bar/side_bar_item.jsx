import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



export default props => {
  let className = 'side-bar-item' + `${props.color.name}`;
  let colorName = `${props.color.name}`.toLowerCase();
  return(
    <li className={className}>



      <NavLink to={`/colors/${props.color.id}`} exact={true} activeStyle={{ color: colorName }}>{props.color.name}
      </NavLink>

    </li>
  )

}
