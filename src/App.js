import React, { Component } from 'react';
import './App.css';

import MainForm from './components/MainForm'

import data from './mock'


class App extends Component {

  render() {

        const foodTypes = ['Все включено','Без питания','Завтраки','Завтрак и ужин','Завтрак, обед и ужин']

        const starsTypes = ['Любая', '5','4','3','2','-','Апартаменты']

      return (
      <div className="App">

            <MainForm
            san={data}
            foodTypes={foodTypes}
            starsTypes={starsTypes}
            />

      </div>
    );
  }
}

export default App;
