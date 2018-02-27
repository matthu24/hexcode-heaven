import React from 'react';
import SearchDropdown from './search_dropdown';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.findMatches = this.findMatches.bind(this);
    this.state = {searchValue: ""};
  }

  componentDidMount(){
    // this.props.fetchAllColors();
  }

  handleChange(e){
    e.preventDefault();
    //set state here with e.target.value
    this.setState({searchValue: e.target.value})

  }

  //findMatches will return an array of 3 hex codes that match this.state.searchValue
  findMatches(){
    let query = this.state.searchValue;
    let hexArray = [];//get an array of all hex codes from this.props.colors
    this.props.colors.forEach(color => {
      Object.values(color.hexes).forEach(hex => {
        hexArray.push(hex.code);
      })
    })

    return hexArray.filter(hex => {
      const regex = new RegExp(query, 'gi');
      //g is global (looks through entire string), i is case insensitive
      return hex.match(regex)
    }).splice(0,3)
  }

  render(){
    if (!this.props.colors) {
      return null;
    }
    //this.props.colors is an array of color objects

      let results = this.findMatches();
      if(this.state.searchValue === ""){
        results = []
      }
      console.log(results);


      //everytime search input is changed, a state change occurs and a re render happens
      //pass search results to SearchDropdown component as props
      //have an onChange event for the input
    return(
      <div className='search-container'>
        <input placeholder='Search' onChange={this.handleChange} className='search' type='text'></input>
        <SearchDropdown results={results}/>
      </div>
    )
  }
}

export default Search;

// {
//   this.props.colors.map(color => <li className='search-item'>{color.name}</li>)
// }
