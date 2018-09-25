import React, { Component } from 'react';

class HotelStarsForm extends Component {

  render() {


    let starsView = this.props.starsTypes.map ((el,ind)=>{
      return (
        <div key={ind}>
        <input
        onClick={()=>{this.props.handleStars (ind)}}
        type='checkbox'
        />
        <span>{el}</span>
        </div>

      )
    })
      return (
      <div >
        {starsView}
      </div>
    );
  }
}

export default HotelStarsForm;
