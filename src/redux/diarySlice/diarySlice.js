import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDate: new Date(),
  diaryNotes: []
};

const diarySlice = createSlice({
  name: "diary",
  initialState: initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload
    },
    addNotes: (state, action) => {
      if (action.payload.title !== "" && action.payload.data !== "") {
        state.diaryNotes = [...state.diaryNotes, ({ date: action.payload.date, title: action.payload.title, data: action.payload.data })];
      }
    },
    deleteNotes: (state, action) => {
      state.diaryNotes = state.diaryNotes?.filter((note) => note.title !== action.payload)
    },
    editNote: (state, action) => {
      if (action.payload.data !== "") {
        state.diaryNotes = state.diaryNotes.map((note) => {
          if (note.title !== action.payload.title) {
            return note
          }
          else {
            return { ...note, data: action.payload.data }
          }
        })
      }
    }
  }
});

export const { setSelectedDate, addNotes, deleteNotes, editNote } = diarySlice.actions;

export default diarySlice.reducer;