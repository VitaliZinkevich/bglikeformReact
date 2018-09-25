import React, { Component } from 'react';



class NightsForm extends Component {

  render() {
    let startArray = []
    for (let i = 1; i!==22;  i++) {
      startArray.push(false)
    }

    let formView = startArray.map ((el, ind)=>{
      return (
        <span key={ind}>
        <input
        onChange={()=>{this.props.handleNights (ind)}}
        type='checkbox'
        />{ind+1}
        </span>
      )

    })

      return (

      <div >
        {formView}
      </div>
    );
  }
}

export default NightsForm;
