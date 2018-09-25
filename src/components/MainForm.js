import React, { Component } from 'react';

import DatesForm from './formparts/DatesForm'
import NightsForm from './formparts/NightsForm'
import FoodForm from './formparts/FoodForm'
import HotelStarsForm from './formparts/HotelStarsForm'
import PersonsForm from './formparts/PersonsForm'
import FilterForm from './formparts/FilterForm'

class MainForm extends Component {

    state = {
      datesForm: {dateFrom: null, dateTo: null},
      nights:[],
      food: [],
      stars:[],
      persons:{
        adult: 0, adultData:[],
        children: 0, childrenData:[]},
      filter: '',
      selectedHotels: []

    }

    handleDates = (value, name)=>{
      /* проверка на начальнуюд и конечную даиту*/

      if (name === 'from') {

        let dateFrom = {...this.state.datesForm, dateFrom : value}

        this.setState ({datesForm: dateFrom})
      } else {

        let dateTo = {...this.state.datesForm, dateTo : value}

        this.setState ({datesForm: dateTo})

      }


    }

    handleNights = (index) =>{
      /*передаются индекс массива а не значение учесть при отражении результатов*/

      let nights = [...this.state.nights]
      nights[index]=!nights[index]
      this.setState ({nights:nights})

    }

    handleFood =(index)=>{
      let foodNew = [...this.state.food]
      foodNew[index] = !foodNew[index]
      this.setState ({food:foodNew})
    }

    handleStars = (index) =>{
      // не отмечено ни 1 пункта в том числе и ЛЮБОЙ
      let newStars = [...this.state.stars]
      newStars[index] = !newStars[index]
      this.setState ({stars:newStars})

    }

    handlePersons = (value, name) => {

      if (name === 'adult') {

        let newPersons = {...this.state.persons, adult: value}
        this.setState ({persons:newPersons})
      } else {
        let newPersons = {...this.state.persons, children: value}
        this.setState ({persons:newPersons})
      }
    }

    handlePersonsDetailes = (name, value, index)=>{

      if (name === 'adult') {

        let newPersonsDetailes = {...this.state.persons}
        newPersonsDetailes.adultData[index] = value
        this.setState ({persons:newPersonsDetailes})

      } else {
        let newPersonsDetailes = {...this.state.persons}
        newPersonsDetailes.childrenData[index] = value
        this.setState ({persons:newPersonsDetailes})
      }

    }

    handleFilter = (str) => {
      this.setState ({filter: str})
    }

  render() {



    return (
      <div>

      <p>Даты начала тура</p>
      <DatesForm
      handleDates={this.handleDates}
      />

      <p>Количество ночей</p>
      <NightsForm
      handleNights={this.handleNights}
      />

      <p>Тип питания</p>
      <FoodForm
      foodTypes={this.props.foodTypes}
      handleFood={this.handleFood}
      />

      <p>Категория отеля</p>
      <HotelStarsForm
      starsTypes={this.props.starsTypes}
      handleStars={this.handleStars}
      />

      <p>Размещение</p>
      <PersonsForm
      handlePersons={this.handlePersons}
      handlePersonsDetailes={this.handlePersonsDetailes}
      adult={this.state.persons.adult}
      children={this.state.persons.children}
      />

      <p>Поиск по названию</p>
      <FilterForm
      handleFilter={this.handleFilter}/>
      </div>
    );
  }
}

export default MainForm;
