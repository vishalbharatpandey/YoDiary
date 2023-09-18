import React, { useState } from 'react'
import CalendarComponent from './calendar/calendar'
import './landingPage.scss'
import DayNotes from './dayNotes/dayNotes'
import CreateNote from './createNote/createNote'

const LandingPage = () => {

  const [noDateSelected, setNoDateSelected]= useState(true)

  setTimeout(()=> document.getElementById("landingPage").children[0].classList.add("upperPosition1") ,200)
  setTimeout(()=> document.getElementById("landingPage").children[1].classList.add("upperPosition2") ,300)
  setTimeout(()=> document.getElementById("landingPage").children[2].classList.add("upperPosition3") ,450)
  setTimeout(()=> document.getElementById("landingPage").children[0].classList.add("normalPosition") ,650)
  setTimeout(()=> document.getElementById("landingPage").children[1].classList.add("normalPosition") ,700)
  setTimeout(()=> document.getElementById("landingPage").children[2].classList.add("normalPosition") ,750)
  
  return (
    <div id='landingPage' className='landingPage'>
        <CalendarComponent setNoDateSelected={setNoDateSelected} />
        <DayNotes />
        <CreateNote noDateSelected={noDateSelected} />
    </div>
  )
}

export default LandingPage