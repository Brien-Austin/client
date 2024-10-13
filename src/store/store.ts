import {configureStore} from '@reduxjs/toolkit'

import AuthenticationReducer from '../store/slice/auth'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
    reducer : {
        authentication : AuthenticationReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export type AppDispatch = typeof store.dispatch