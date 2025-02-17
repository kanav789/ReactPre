import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from "../CreateSlice.jsx"
import StudentReducer from "../StudentSlice.jsx"
  const store =configureStore({
    reducer:{
     counter:CounterReducer,   
     student:StudentReducer
    }
})

export default store;