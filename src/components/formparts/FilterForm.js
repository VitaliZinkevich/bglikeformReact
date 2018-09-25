import React, { Component } from 'react';




class FilterForm extends Component {

  handleChange = (e)=>{
    this.props.handleFilter(e.target.value)
  }
  render() {


      return (
      <div>
      <input
      onChange={this.handleChange}
      />

      </div>
    );
  }
}

export default FilterForm;
