import { createSlice } from "@reduxjs/toolkit";


const studentslice = createSlice({

    name:"student",
    initialState:{students:[]},
    reducers:{
        setStudents:(state,action)=>{
            state.students =action.payload
        }
    }
     
     
})
export const {setStudents} = studentslice.actions;
export default studentslice.reducer;