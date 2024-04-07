import { createSlice } from '@reduxjs/toolkit'
import {computePieData} from "./setPieData"
const initialState = {
  funds:[],
  pieData:[],
  hoverId:null,
  sideBarData:[]

}

export const mf = createSlice({
  name: 'mf',
  initialState,
  reducers: {
    addNewFund: (state,action) => {
      state.funds=[...state.funds,action.payload];
    },
    deleteFund: (state,action) => {
      state.funds=state.funds.filter((_, i) => i !== action.payload);
    },
    setDetails:computePieData,
    setHover:(state,action)=>{
      state.hoverId=action.payload;
    }
    
   
 
  },
})

export const { addNewFund,deleteFund,setDetails,setHover } = mf.actions
export default mf.reducer