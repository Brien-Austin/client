
import {configureStore} from '@reduxjs/toolkit'
import {persistReducer , persistStore} from 'redux-persist'

import { useDispatch, useSelector } from 'react-redux'
import storage from 'redux-persist/lib/storage'
import { enrolledCourseSlice } from './slice/course'
const generatePersistConfig = (key: string) => ({
    key,
    storage,
  });


  const persistedCourse = persistReducer(generatePersistConfig("enrolledCourse"),enrolledCourseSlice.reducer)
export const store = configureStore({
    reducer : {
        enrolledCourse : persistedCourse

    }
})


  
  



export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export type AppDispatch = typeof store.dispatch