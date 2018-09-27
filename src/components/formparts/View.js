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
        return null
      } else {
        return (
          <div key={ind} className='d-flex flex-row my-1' >
          <input className='my-2'
          onClick={this.handleClick}
          type='checkbox'
          name={ind}
          />



          <strong className='mx-1'>{el.name}</strong>
          <p className='mx-1'>{el.type}</p>
          <p className='mx-1'>{el.region}</p>
          <p className='mx-1'>{el.stars}</p>
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
