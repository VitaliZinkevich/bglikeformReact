import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
import promise from 'redux-promise-middleware'

const store = createStore(rootReducer, applyMiddleware(promise(), thunk, logger));

// вынести в отдельный файл ВЫНЕСЕНО
store.dispatch((dispatch)=>{

    dispatch ({type: 'FOO', payload :axios.get('http://localhost:8080/')})
})

 /*   dispatch({type: 'FETCH_HOTELS'})
    axios.get('http://localhost:8080/')
    .then(res => {
        dispatch({type: 'HOTELS_RECIVED', payload: res.data})
    }).catch ((error)=>{
        dispatch({type: 'HOTELS_ERROR', payload: error})
    })
    
})*/





ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
