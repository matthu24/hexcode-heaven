import React from 'react';


class ColorsShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchColor(this.props.match.params.colorId);
  }

  render(){
    console.log(this.props)

    return(
      <div className='colors-show'>
        <div>
          {this.props.color.name}
        </div>
      </div>
    )
  }
}

export default ColorsShow;
