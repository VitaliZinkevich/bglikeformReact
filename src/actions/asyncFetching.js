const fetchHotels = ((dispatch)=>{

    dispatch({type: 'FETCH_HOTELS'})
    axios.get('http://localhost:8080/')
    .then(res => {
        dispatch({type: 'HOTELS_RECIVED', payload: res.data})
    }).catch ((error)=>{
        dispatch({type: 'HOTELS_ERROR', payload: error})
    })
    
})

export {fetchHotels}