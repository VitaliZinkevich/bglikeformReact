import React, { Component } from 'react';


class View extends Component {


  handleClick = (e) =>{
    console.log (e.target.name)
    this.props.handleSelectSan(e.target.name)
  }

  render() {

    let obj = this.props.data

    let objView = obj.map ((el,ind)=>{
      if (el == null ) {

      } else {
        return (
          <div key={ind} >

          <input
          onClick={this.handleClick}
          type='checkbox'
          name={ind}
          />
          <span>выбрать</span>

          <p>{el.name}</p>
          <p>{el.type}</p>
          <p>{el.region}</p>
          <p>{el.stars}</p>
          </div>
        )

      }

    })

    return (
      <div>
      {objView}
      </div>
    );
  }
}

export default View;
