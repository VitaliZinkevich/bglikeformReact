import React, { Component } from 'react';
import PersonDetailes from './PersonDetailes'
// детали туристов имя фамиоия паспорт дата рождения телефон
class PersonsForm extends Component {

  handleChange = (e)=>{
    this.props.handlePersons (e.target.value, e.target.name)
  }

  handlePersonsDetailes = (name, value, index)=>{
    this.props.handlePersonsDetailes(name, value, index)
  }


  render() {

    let n = this.props.adult
    let detailesAd = Array.from({length: n})



    let adultDetailes = detailesAd.map ((el,ind)=>{
      return (
        <div key={ind} >
        <p>Данные взрослого {ind+1}</p>
        <PersonDetailes
        handlePersonsDetailes={this.handlePersonsDetailes}
        i={ind}
        name='adult'
        />
        </div>
      )
    })

    let n1 = this.props.children
    let detailesCh = Array.from({length: n1})

    let childrenDetailes = detailesCh.map ((el,ind)=>{
      return (
        <div key={ind} >
        <p>Данные ребенка {ind+1}</p>
        <PersonDetailes
        handlePersonsDetailes={this.handlePersonsDetailes}
        i={ind}
        name='children'
        />
        </div>
      )
    })

    let opt = [0,1,2,3,4,5,6,7,8,9]

    let optView = opt.map((el, ind)=>{

       return ( <option
        key={ind}
        value={el}
        >
        {el}
        </option>
      )
    })

 return (
      <div>

        <span>Взрослых</span>

        <select
        name='adult'
        onChange={this.handleChange}
        >
        {optView}
        </select>


        <span>Детей</span>

        <select
        name='children'
        onChange={this.handleChange}
        >

        {optView}
        </select>

        <div>
        {adultDetailes}
        </div>

        <div>
        {childrenDetailes}
        </div>
      </div>
    )
  }
}

export default PersonsForm;
