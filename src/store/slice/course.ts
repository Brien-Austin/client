import {createSlice,PayloadAction} from '@reduxjs/toolkit'


interface Chapter {
        id : string
        index : number,
        isCompleted : boolean,
        title : string,
        description : string,
        videoUrl : string
    
}

interface EnrolledCourse {
    currentCourse: string,
    currentTab : string,
    currentChapter : {
        index : number,
        id : string,
        isCompleted : boolean,
        title : string,
        description : string,
        videoUrl : string
    }
}

const initialState: EnrolledCourse={
    currentCourse: "",
    currentTab : "Home",
    currentChapter : {
        id : "",
        index : 1,
        isCompleted : false,
        title : "",
        description : "",
        videoUrl : ""
        
    }
    

}

export const enrolledCourseSlice  = createSlice({
    name : 'enrolled-course',
    initialState,
    reducers : {
        setCurrentChapterId : (state,action:PayloadAction<string>)=>{
            state.currentChapter.id = action.payload
            
        },

        setCurrentChapter : (state,action:PayloadAction<Chapter>)=>{
            state.currentChapter = {
                id : action.payload.id,
                title: action.payload.title,
                index: action.payload.index,
                description: action.payload.description,
                videoUrl: action.payload.videoUrl,
                isCompleted: action.payload.isCompleted,
            };

        },
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

export const {setCurrentCourse,setCurrentChapterId,setCurrentChapter,setCurrentTab , setCurrentChapterCompleted} = enrolledCourseSlice.actions
export default enrolledCourseSlice.reducer