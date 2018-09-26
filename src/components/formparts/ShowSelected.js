import React, { Component } from 'react';

class ShowSelected extends Component {

  render() {

    let selectedView = this.props.selected.map ((el, ind)=>{
        if (el === true) {
          return (
            <div key={ind}>{this.props.all[ind].name}</div>
          )
        } else {
          return false
        }
      })



      return (
      <div >
      {selectedView}
      </div>
    );
  }
}

export default ShowSelected;
