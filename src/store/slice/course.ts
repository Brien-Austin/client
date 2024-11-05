import {createSlice,PayloadAction} from '@reduxjs/toolkit'



interface EnrolledCourse {
    currentCourse: string,
    currentTab : string
}

const initialState: EnrolledCourse={
    currentCourse: "",
    currentTab : "Home"

}

export const enrolledCourseSlice  = createSlice({
    name : 'enrolled-course',
    initialState,
    reducers : {
       setCurrentCourse : (state,action : PayloadAction<string>) =>{
        state.currentCourse = action.payload

       },
       setCurrentTab : (state , action : PayloadAction<string>) =>{
        state.currentTab = action.payload
       }
    }
})

export const {setCurrentCourse,setCurrentTab} = enrolledCourseSlice.actions
export default enrolledCourseSlice.reducer