import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  formInfo: {
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  open,
  onClose,
  formInfo,
  handleChange,
  onSubmit,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="First Name"
          name="first_name"
          value={formInfo.first_name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Last Name"
          name="last_name"
          value={formInfo.last_name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Email"
          name="email"
          value={formInfo.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Avatar URL"
          name="avatar"
          value={formInfo.avatar}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onSubmit} color="primary">
          Save
        </Button>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
