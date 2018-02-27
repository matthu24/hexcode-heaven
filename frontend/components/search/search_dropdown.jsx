import React from 'react';
import {Link} from 'react-router-dom';


class Dropdown extends React.Component {
  render () {

    //map through this.props.results in the ul container to fill the li elements
    return (
      <div className="suggestions">
        <ul>
          {
            this.props.results.map(result =>
              <Link className='search-link' to={`/hex/${result}`}>
                <li className="search-results-li">
                  {result}
                  <div className='search-color-show' style={{backgroundColor:`#${result}`}}></div>
                </li>
              </Link>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Dropdown;


// <li className="search-results-li">
//   hi
// </li>
// <li className="search-results-li">hey</li>
