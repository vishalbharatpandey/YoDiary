import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { editNote } from '../../../../redux/diarySlice/diarySlice';
import { useDispatch } from 'react-redux';
import { TextareaAutosize } from '@mui/base';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Edit({editPopup,setEditPopup,toEdit,setToEdit}) {

  const handleClose = () => {
    setEditPopup(false);
  };
  const dispatch= useDispatch()

  return (
    <div>
      <Dialog
        open={editPopup}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{textAlign: "center"}}>{"Edit?"}</DialogTitle>
        <DialogContent>
        <TextareaAutosize
        value={toEdit?.data}
        onChange={(e) => setToEdit({...toEdit, data: e.target.value})}
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
          <div className="moreOptionsList">
            <p onClick={()=> {dispatch(editNote(toEdit)); setToEdit(null); handleClose()}}>Edit</p>
            <p onClick={handleClose}>Cancel</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}