import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.scss";
import {setSelectedDate} from './../../../redux/diarySlice/diarySlice'
import { useSelector,useDispatch } from "react-redux";

const CalendarComponent=({setNoDateSelected})=> {
    const dispatch= useDispatch()
  // Array to store month string values
  const allMonthValues = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // State for date selected by user
  const selectedDateFromRedux= useSelector((state)=>state.diary.selectedDate)
  const notes=useSelector((state)=>state.diary.diaryNotes)?.slice(-3)
  const [selectedDate, setSelectedDateState] = useState(selectedDateFromRedux);

  // State for text above calander
  const [calendarText, setCalendarText] = useState(`No date selected to create notes!`);

  // Function to update selected date and calander text
  const handleDateChange = (value) => {
    dispatch(setSelectedDate(value))
    setSelectedDateState(value);
    setCalendarText(`The selected Date is ${value.toDateString()}`);
    setNoDateSelected(false)
  };

  // Function to handle selected Year change
  const handleYearChange = (value) => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue} Year  is selected`);
  };

  // Function to handle selected Month change
  const handleMonthChange = (value) => {
    const monthValue = allMonthValues[value.getMonth()];
    setCalendarText(`${monthValue} Month  is selected`);
  };

  return (
    <div className="calendar">
      <h4 style={{ backgroundColor:"lightgray", width: "100px", textAlign:"center", padding:"10px", borderRadius:"25px"}}>
        Yo Diary
      </h4>
      <h2 className="calander-details">{calendarText}</h2>
      <Calendar
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
      />
      <div className='recentNotes'>
        {notes?.length>0 &&
          <h4>Recent notes</h4>}
        {notes?.map((item)=>{
          return <p>
            <span>{item?.title?.length>20 ? item?.title?.slice(0,20) + "..." : item?.title}</span>
            <span>{item?.date?.toDateString()}</span>
            </p>
        })}
    </div>
    </div>
  );
}

export default CalendarComponent;