import React, { Component } from 'react';



class FoodForm extends Component {

  render() {


    let foodView = this.props.foodTypes.map ((el, ind)=>{
      return (
        <div key={ind}>
        <input
        type='checkbox'
        onClick ={()=>{this.props.handleFood(ind)}}
        />
        <span> {el} </span>
        </div>
      )
    } )
      return (
      <div >
      {foodView}
      </div>
    );
  }
}

export default FoodForm;
