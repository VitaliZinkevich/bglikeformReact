import React, { Component } from 'react';


class DatesForm extends Component {

  datesData = (e)=>{
    this.props.handleDates (e.target.value, e.target.name)
  }

  render() {

      return (
      <div >

      <span>C  </span><input
      type='date'
      name='from'
      onChange={this.datesData}
      />
      <span>По  </span><input
      type='date'
      data='to'
      onChange={this.datesData}
      />

      </div>
    );
  }
}

export default DatesForm;
