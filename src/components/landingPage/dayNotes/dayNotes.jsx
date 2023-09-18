import React, { useState, useEffect } from "react";
import "./dayNotes.scss";
import { useSelector } from "react-redux";
import { TextareaAutosize } from "@mui/base";
import { MdDelete, MdEdit } from "react-icons/md";
import { AiOutlineRead } from "react-icons/ai";
import Options from "./optionsPanel/options";
import Edit from "./editPanel/edit";

const DayNotes = () => {
  const selectedDate = useSelector((state) => state.diary.selectedDate);
  const notes = useSelector((state) =>
    state.diary.diaryNotes?.filter(
      (note) => note.date.getTime() === selectedDate.getTime()
    )
  );

  const [textAreaValue, setTextAreaValue] = useState("");
  const [title, setTitle] = useState("");
  const [moreOptionsPopup, setMoreOptionsPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [toDelete, setToDelete] = useState("");
  const [toEdit, setToEdit] = useState(null);

  useEffect(() => {
    setShowDetails(false);
  }, [selectedDate]);

  const handleClick = (e) => {
    console.log(e, "check");
    if (e.target.nodeName !== "path" && e.target.nodeName !== "svg") {
      setShowDetails(true);
    }
    if (e.target.nodeName === "DIV") {
      setTextAreaValue(e.target.nextElementSibling.innerText);
      setTitle(e.target.innerText);
    } else if (e.target.nodeName === "P") {
      setTextAreaValue(e.target.innerText);
      let temp = notes?.find((note) => note.data === e.target.innerText);
      setTitle(temp.title);
    }
  };

  return (
    <div className='dayNotes'>
      <h4>Notes for {selectedDate?.toDateString()}</h4>

      <div style={{ maxHeight: "130px", overflowY: "auto", cursor: "pointer" }}>
        {notes?.map((item) => {
          return (
            <div onClick={(e) => handleClick(e)}>
              <div className='title'>
                {/* {item?.title?.length > 20
                  ? item?.title?.slice(0, 20) + "..." */}
                  {item?.title}
              </div>
              <p
                onClick={(e) => {
                  setTextAreaValue(e.target.innerHTML);
                }}>
                {/* {item?.data?.length > 50
                  ? item?.data?.slice(0, 50) + "..." */}
                  <span style={{width:"20vw", overflowX: "hidden"}}>{item?.data}</span>
                <span>
                  <MdEdit
                    onClick={() => {
                      setShowDetails(false);
                      setMoreOptionsPopup(false);
                      setEditPopup(true);
                      setToEdit(item);
                    }}
                    size={20}
                    style={{ cursor: "pointer" }}
                  />
                  <MdDelete
                    onClick={() => {
                      setShowDetails(false);
                      setEditPopup(false);
                      setMoreOptionsPopup(true);
                      setToDelete(item.title);
                    }}
                    size={20}
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </p>
            </div>
          );
        })}
      </div>

      {showDetails && (
        <div>
          <div className='titleAndButtons'>
            <span>
              <AiOutlineRead size={30} />
            </span>
            <span>{title}</span>
          </div>
          <TextareaAutosize
            value={textAreaValue}
            // onChange={(e) => setNotesState(e.target.value)}
            aria-label='minimum height'
            minRows={20}
            maxRows={20}
            style={{
              width: "24vw",
              height: "45vh",
              border: "none",
              color: "black",
              fontSize: "1.25rem",
              fontWeight: "500",
              paddingTop: "1vh",
              paddingLeft: "1vw",
              overflow: "scroll",
              marginTop: "20px",
              backgroundImage:
                "repeating-linear-gradient(45deg,white,lightgray 7%,white 10%)",
              fontFamily: "Dancing Script",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
      {!showDetails && notes?.length>0 && <div style={{display: "flex", justifyContent: "center", alignItems: "center", height:"40vh", color:"gray"}}>
        Click on notes to expand
        </div>}
      <Options
        moreOptionsPopup={moreOptionsPopup}
        setMoreOptionsPopup={setMoreOptionsPopup}
        toDelete={toDelete}
        setToDelete={setToDelete}
      />
      <Edit
        editPopup={editPopup}
        setEditPopup={setEditPopup}
        toEdit={toEdit}
        setToEdit={setToEdit}
      />
    </div>
  );
};

export default DayNotes;
