import {createSlice} from '@reduxjs/toolkit'


interface Authentication {
    isAuthenticated: boolean
}

const initialState: Authentication={
    isAuthenticated: false

}

export const authenticationSlice  = createSlice({
    name : 'authentication',
    initialState,
    reducers : {
        setIsAuthenticated : (state)=>{
            state.isAuthenticated = true
        },
        setLogout : (state)=>{
            state.isAuthenticated = false
        }
    }
})

export const {setIsAuthenticated,setLogout} = authenticationSlice.actions
export default authenticationSlice.reducer