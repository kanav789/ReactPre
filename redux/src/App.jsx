import React, { useEffect } from 'react'
import {increament,decreament,increamentByAmount} from "./redux/CreateSlice"
import {useDispatch} from "react-redux"
function App() {
 const  dispatch =useDispatch()
setInterval(()=>{
  dispatch(increament())  
dispatch(decreament())
dispatch(increamentByAmount(10))

},[1000])

  return (
    <div>

  

    </div>
  )
}

export default App