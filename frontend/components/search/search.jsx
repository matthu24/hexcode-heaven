import React from 'react';
import SearchDropdown from './search_dropdown';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllColors();
  }

  onChange(){
    //set state here with e.target.value
  }

  render(){
    if (!this.props.colors) {
      return null;
    }
      console.log(this.props.colors)
      let test = this.props.colors.length;


      //pass search results to SearchDropdown component as props
      //have an onChange event for the input
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
