import React, { Component } from 'react';

class PersonDetailes extends Component {

  handleChange = (e) => {

    this.props.handlePersonsDetailes(e.target.name, e.target.value, e.target.dataset.index)

  }

  render() {

      return (
    <div>

    <span>Лет туристу {this.props.i+1}</span>
    <input
    type='number'
    onChange={this.handleChange}
    name={this.props.name}
    data-index={this.props.i}
    />

      </div>

    );
  }
}

export default PersonDetailes;
