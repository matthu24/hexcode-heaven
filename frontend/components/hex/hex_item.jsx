import React from 'react';

export default props => {
  let color = '#' + props.hex.code;

  return(
    <li>
      <div className='swatch-bundle'>
        <div style={{backgroundColor:color}} className='swatch-item'></div>
        <div>#{props.hex.code}</div>
      </div>

    </li>
  )
}
