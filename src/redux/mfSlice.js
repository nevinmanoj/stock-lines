import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:["fund1", "funad2"]
}

export const mf = createSlice({
  name: 'mf',
  initialState,
  reducers: {
    addNewFund: (state,action) => {
      state.data=[...state.data,action.payload];
    },
    deleteFund: (state,action) => {
  
      state.data=state.data.filter((_, i) => i !== action.payload);
    },
 
  },
})

export const { addNewFund,deleteFund } = mf.actions
export default mf.reducer