import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
 const initialState = {
    food: [],
    wishlist: []
  }

export const getAllProducts = createAsyncThunk('food', async() => {
    const response  = await axios.get("http://localhost:5007/foods")
    console.log(response.data);
    return response.data
} )
export const foodSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
        state.wishlist.push(action.payload)
      }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
       state.food = action.payload
    })
  },
})

 
export const {addToWishlist} = foodSlice.actions

export default foodSlice.reducer