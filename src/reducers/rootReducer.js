//import axios from 'axios'

let initState = {
    startFethHotel: false,
    fethError: null,
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
    
    switch(action.type) {
      case 'FETCH_HOTELS':
          return (
            {...state,
              startFethHotel: true}
          )
          
      case 'HOTELS_RECIVED':
          
          return (
            {
              ...state,
              startFethHotel: false,
              hotels: action.payload

            }
          )
      
      case 'HOTELS_ERROR':
      return (
        {
          ...state,
          startFethHotel: false,
          fethError: action.error

        }
      )
         

      default:
           break     
  } 
    
    return state;
  }
  
  export default rootReducer