

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
        name: string;
        color: string;
        pantone_value: string;
        year: number;
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
}

const EditModalResource: React.FC<EditModalProps> = ({
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
                    label="Name"
                    name="name"
                    value={formInfo.name}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="color"
                    name="color"
                    value={formInfo.color}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Pantone Value"
                    name="pantone_value"
                    value={formInfo.pantone_value}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Year"
                    name="year"
                    value={formInfo.year}
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

export default EditModalResource;
