import {createSlice,PayloadAction} from '@reduxjs/toolkit'



interface EnrolledCourse {
    currentCourse: string,
    currentTab : string,
    currentChapter : {
        index : number,
        isCompleted : boolean
    }
}

const initialState: EnrolledCourse={
    currentCourse: "",
    currentTab : "Home",
    currentChapter : {
        index : 1,
        isCompleted : false
    }
    

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
       },
       setCurrentChapterCompleted : (state,action : PayloadAction<number>) =>{
        state.currentChapter.index = action.payload

        state.currentChapter.isCompleted = true
       }
    }
})

export const {setCurrentCourse,setCurrentTab , setCurrentChapterCompleted} = enrolledCourseSlice.actions
export default enrolledCourseSlice.reducer