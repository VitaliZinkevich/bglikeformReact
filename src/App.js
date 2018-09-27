import React, { Component } from 'react';


import MainForm from './components/MainForm'

import data from './mock'


class App extends Component {

  render() {

        const foodTypes = ['Все включено','Без питания','Завтраки','Завтрак и ужин','Завтрак, обед и ужин']

        const starsTypes = [ '5','4','3','2','-','Апартаменты']

      return (
      <div className="container">

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
