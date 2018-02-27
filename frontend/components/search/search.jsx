import React from 'react';
import SearchDropdown from './search_dropdown';

class Search extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllColors();
  }

  render(){
    if (!this.props.colors) {
      return null;
    }
      console.log(this.props.colors)
      let test = this.props.colors.length;


    return(
      <div className='search-container'>
        <input placeholder='Search' className='search' type='text'></input>
        <SearchDropdown/>
      </div>
    )
  }
}

export default Search;

// {
//   this.props.colors.map(color => <li className='search-item'>{color.name}</li>)
// }
