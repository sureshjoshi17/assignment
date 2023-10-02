import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

const Popup = ({ open, onClose, responseMessage }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {/* <DialogTitle>Signup Response</DialogTitle> */}
      <DialogContent>
        <Typography variant="body1">{responseMessage}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
