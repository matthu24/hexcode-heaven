import React from 'react';
import HexItem from '../hex/hex_item';

class ColorsShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchColor(this.props.match.params.colorId);
  }

  render(){
    if(!this.props.color) return null;

    let hexes = Object.values(this.props.color.hexes);

    return(
      <div className='colors-show'>
        <ul className='colors-show-list'>
          {
            hexes.map((hex,id) => <HexItem key={id} hex={hex}/>)
          }
        </ul>
      </div>
    )
  }
}

export default ColorsShow;
