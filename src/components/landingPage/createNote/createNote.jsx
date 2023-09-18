import React, { useState } from "react";
import "./createNote.scss";
import { TextareaAutosize } from "@mui/base";
import { useSelector, useDispatch } from "react-redux";
import { addNotes } from "../../../redux/diarySlice/diarySlice";
import { Button } from "@mui/base";
import { TextField } from "@mui/material";
import VoiceNote from "./speechInput/speechInput";

const CreateNote = ({noDateSelected}) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.diary.selectedDate);
  const [notesState, setNotesState] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className='createNote'>
      <h4>Create Note</h4>
      <TextField
        required
        id='outlined-required'
        label='Enter title'
        defaultValue=''
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <VoiceNote setNotesState={setNotesState} />
      <TextareaAutosize
        value={notesState}
        onChange={(e) => setNotesState(e.target.value)}
        aria-label='minimum height'
        minRows={20}
        maxRows={20}
        placeholder='Enter some event, memory or description of the day.'
        style={{
          width: "24vw",
          height: "40vh",
          border: "none",
          color: "black",
          fontSize: "1.25rem",
          fontWeight: "500",
          paddingTop: "1vh",
          backgroundImage: "url(./flower.jpg)",
          backgroundSize: "700px",
          paddingLeft: "1vw",
          overflow: "scroll",
          fontFamily: "Dancing Script",
          borderRadius: "10px",
          marginTop: "12px",
        }}
      />
      <Button
        style={{
          backgroundColor: "orangered",
          borderRadius: "20px",
          marginTop: "15px",
          height: "50px",
          width: "150px",
          padding: "5px",
          fontSize: "1rem",
          cursor: "pointer",
          backgroundImage: "linear-gradient(to right, orangered,white)",
        }}
        onClick={() => {
          if(noDateSelected){
            alert("Please select a date from Calendar to create notes.")
            return
          }
          dispatch(
            addNotes({ date: selectedDate, title: title, data: notesState })
          );
          setTitle("");
          setNotesState("");
        }}>
        Add notes
      </Button>
    </div>
  );
};

export default CreateNote;
