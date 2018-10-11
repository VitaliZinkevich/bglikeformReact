import React, { Component } from 'react';
import { connect } from 'react-redux'


import DatesForm from './formparts/DatesForm'
import NightsForm from './formparts/NightsForm'
import FoodForm from './formparts/FoodForm'
import HotelStarsForm from './formparts/HotelStarsForm'
import PersonsForm from './formparts/PersonsForm'
import FilterForm from './formparts/FilterForm'


import View from './formparts/View'
import ShowSelected from './formparts/ShowSelected'

class MainForm extends Component {

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

      let newView = []

      newStars.map ((el, ind)=>{
        if (el == true) {
        this.props.san.map ((elem, ind1)=>{
            if (elem.stars == this.props.starsTypes[ind] ) {
              newView.push (elem)
            } else {}

         })

        }
      })

      if ((newStars.indexOf(true) == -1) && (newView.length === 0) ) {
        newView = this.props.san
         }

      this.setState ({stars:newStars, view: newView})

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
    //  this.setState ({filter: str})
    let newView = []
    this.props.san.forEach ((el, ind)=>{

      if (el.name.toLowerCase().indexOf (str.toLowerCase()) != -1 ) {
        newView.push (el)
      }
      this.setState ({filter: str, view: newView})
    })





    }

    handleSelectSan = (name) =>{
      let newSelected = [...this.state.selectedSan]
      newSelected[name]=!newSelected[name]
      this.setState ({selectedSan:newSelected})
    }

  render() {



    return (
      <div>
      <div className='d-flex flex-row flex-wrap justify-content-around my-5'>

      <div className='d-flex flex-column mx-3 my-3'>
      <p>Даты начала тура</p>
      <DatesForm
      handleDates={this.handleDates}
      />
      </div>

      <div className='d-flex flex-column mx-3 my-3'>
      <p>Количество ночей</p>
      <NightsForm
      handleNights={this.handleNights}
      />
      </div>



      <div className='d-flex flex-column mx-3 my-3'>
      <p>Тип питания</p>
      <FoodForm
      foodTypes={this.props.foodTypes}
      handleFood={this.handleFood}
      />
      </div>

      <div className='d-flex flex-column mx-3 my-3'>
      <p>Категория отеля</p>
      <HotelStarsForm
      starsTypes={this.props.starsTypes}
      handleStars={this.handleStars}
      />
      </div>
      <div className='d-flex flex-column mx-3 my-3'>
      <p>Размещение</p>
      </div>
      </div>

    <div className='d-flex flex-column mx-3 my-3'>

      <div className='d-flex flex-row mx-3 my-3'>
      <p className='mx-1'>Поиск по названию</p>
      <FilterForm
      handleFilter={this.handleFilter}/>
      </div>

      <div className='d-flex flex-row '>
      <div className='d-flex flex-column mx-3 my-3'>
      <p>Отели</p>
      <View
      
      />
      </div>

      <div className='d-flex flex-column mx-3 my-3'>
      <p>Выбранные отели</p>
     
      </div>
      </div>
    </div>


      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    foodTypes: [...state.foodTypes],
    starsTypes: [...state.starsTypes],
    hotels:[...state.hotels]
  }
}

export default connect(mapStateToProps)(MainForm);
