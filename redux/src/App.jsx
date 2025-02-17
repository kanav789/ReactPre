import axios from "axios"  
import React, { useEffect, useState } from 'react'
import {increamentByAmount} from "./redux/CreateSlice"
import {useDispatch} from "react-redux"
import { setStudents } from "./redux/StudentSlice"
import { useSelector } from "react-redux"
function App() {



const dispatch = useDispatch()

 

useEffect(()=>{

  dispatch(increamentByAmount(5))
  const fetchStudents = async () => {
    try {
      const response = await axios.get(`/api/students`)
     console.log(response.data)
    dispatch( setStudents(response.data))


     

    } catch (error) {
      console.log(error)
    }
  }

  fetchStudents()

},[])

const student =useSelector((state)=>state.student.students)
 

return (
    <div>
  
 {student.map((student,key)=>{
return <p key={key}>{student.name}: {student.currentback}(currentback)</p>

 })}


    </div>
  )
}

export default App