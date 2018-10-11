import React, { Component } from 'react';
import axios from 'axios'

class View extends Component {

  state = {data:null}

  componentDidMount = ()=>{

    axios.get('http://localhost:8080/')
    .then(res => {
      console.log(res);
      this.setState ({data:res.data})
    })

  }

  handleClick = (e) =>{
    console.log (e.target.name)
    this.props.handleSelectSan(e.target.name)
  }

  render() {
    console.log (this.props)

    let obj = this.state.data
    let objView = null;

    if (obj!== null) {
      objView = obj.map ((el,ind)=>{
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
    } else {
      objView = <div>Нечего показать</div>
    }



    return (
      <div>
      {objView}
      </div>
    );
  }
}

export default View;
