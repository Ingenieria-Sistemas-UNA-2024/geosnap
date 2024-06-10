import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import photoReducer from './photoSlice'
const store = configureStore({
  reducer:{
    user: userReducer,
    photo: photoReducer,
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch