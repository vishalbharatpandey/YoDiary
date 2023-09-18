import { configureStore } from "@reduxjs/toolkit";
import diaryReducer from './diarySlice/diarySlice'

const store= configureStore({
    reducer : {
        diary: diaryReducer
    }
})
export default store