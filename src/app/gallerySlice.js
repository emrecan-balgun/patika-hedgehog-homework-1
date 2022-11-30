import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchItem: '',
  photos: [],
}

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    changePhotos: (state, action) => {
      state.photos = action.payload;
    },
    changeSearchItem: (state, action) => {
      state.searchItem = action.payload
    },
    addPhoto: (state, action) => {
      state.photos = [...state.photos, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { changePhotos, changeSearchItem, addPhoto } = gallerySlice.actions

export default gallerySlice.reducer