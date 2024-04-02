import {configureStore} from "@reduxjs/toolkit"
import mfReducer from './mfSlice';

export const store = configureStore({
    reducer:{
        mf:mfReducer
    }
});