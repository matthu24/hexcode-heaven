import React from 'react';
import {Link} from 'react-router-dom';


class Dropdown extends React.Component {
  render () {
    //map through this.props.results in the ul container to fill the li elements
    return (
      <div className="suggestions">
        <ul>
          <li className="search-results-li">
            hi
          </li>
          <li className="search-results-li">hey</li>
        </ul>
      </div>
    )
  }
}

export default Dropdown;
