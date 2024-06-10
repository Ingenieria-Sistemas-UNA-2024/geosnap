import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/types";
interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: null
}

export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer