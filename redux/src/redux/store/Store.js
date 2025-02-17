import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from "../CreateSlice.jsx"
  const store =configureStore({
    reducer:{
     counter:CounterReducer,   
    }
})

export default store;