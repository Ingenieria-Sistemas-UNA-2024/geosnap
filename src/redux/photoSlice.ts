import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Photo } from "../types/types";

interface PhotoState {
  photos: Photo[];
  lastkey: string | null
}

const initialState: PhotoState = {
  photos: [],
  lastkey:""
};

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<Photo[]>) => {
      state.photos = action.payload;
    },
    addPhotos:(state, action: PayloadAction<Photo[]>) => {
        state.photos = [...state.photos, ...action.payload];
    },
    setLastKey: (state, action: PayloadAction<string>) => {
        state.lastkey = action.payload;
      },
  },
});

export const { setPhotos, addPhotos ,setLastKey} = photoSlice.actions;
export default photoSlice.reducer;
