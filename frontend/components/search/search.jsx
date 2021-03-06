import React from 'react';
import SearchDropdown from './search_dropdown';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.findMatches = this.findMatches.bind(this);
    this.reset = this.reset.bind(this);
    this.resetWait = this.resetWait.bind(this);
    this.state = {searchValue: ""};
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
    }).splice(0,4)
  }

  reset(){
    this.setState({searchValue:""})
  }

  resetWait(){
    setTimeout(() => {
      this.reset()
    },200)
  }

  render(){
    if (!this.props.colors) {
      return null;
    }

    let results = this.findMatches();
    if(this.state.searchValue === ""){
      results = []
    }

    return(
      <div className='search-container'>
        <input placeholder='Search by hex code' onBlur={this.resetWait} value={this.state.searchValue} onChange={this.handleChange} className='search' type='text'></input>
        <SearchDropdown results={results}/>
      </div>
    )
  }
}

export default Search;
