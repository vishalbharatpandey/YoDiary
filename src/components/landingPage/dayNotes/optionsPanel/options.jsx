import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './options.scss'
import { deleteNotes } from '../../../../redux/diarySlice/diarySlice';
import { useDispatch } from 'react-redux';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Options({moreOptionsPopup,setMoreOptionsPopup,toDelete,setToDelete}) {

  const handleClose = () => {
    setMoreOptionsPopup(false);
  };
  const dispatch= useDispatch()

  return (
    <div>
      <Dialog
        open={moreOptionsPopup}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{textAlign: "center"}}>{"Are you sure you want to delete?"}</DialogTitle>
        <DialogContent>
          <div className="moreOptionsList">
            <p onClick={()=> {dispatch(deleteNotes(toDelete)); setToDelete(""); handleClose()}}>Delete</p>
            <p onClick={handleClose}>Cancel</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}