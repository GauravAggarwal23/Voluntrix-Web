import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
 // import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useState } from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [buttonText, setButtonText] = useState();

    const handleButtonClick = () => {
      // Update the button text when clicked
      setOpen(false);
      setButtonText('Applied!');
    };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} >
      { buttonText ? buttonText : <h6>Apply</h6>}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You Want to Apply for this Event?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>No</Button>
          <Button onClick={handleButtonClick}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}