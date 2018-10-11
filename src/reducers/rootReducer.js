//import axios from 'axios'

let initState = {
    foodTypes : ['Все включено','Без питания','Завтраки','Завтрак и ужин','Завтрак, обед и ужин'],
    starsTypes : [ '5','4','3','2','-','Апартаменты'],
    hotels:[]
}
/*

  axios.get('http://localhost:8080/')
  .then(res => {
    console.log(res);
    initState = {...initState,
        hotels:res.data}
  })
*/
  /*
    state = {
      datesForm: {dateFrom: null, dateTo: null},
      nights:[],
      food: [],
      stars:[],
      persons:{
        adult: 0, adultData:[],
        children: 0, childrenData:[]},
      filter: '',
      selectedHotels: [],
      view: this.props.san,
      selectedSan:[],

    }
*/
  
  const rootReducer = (state = initState, action) => {
    
    
    return state;
  }
  
  export default rootReducer