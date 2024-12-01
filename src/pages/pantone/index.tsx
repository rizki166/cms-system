import React, { useState } from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Typography,
    TextField,
    IconButton,
    InputAdornment,
    Box,
    MenuItem,
    Menu,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MdOutlineDelete, } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useResournce from '../../hooks/pantone/useResournce';

const PantonePage = () => {
    const { resource, loading, error, handleDelete, setFormInfo, } = useResournce();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedResource, setSelectedResource] = useState<any>(null);

    const handleClickOpen = (resource: any, event: React.MouseEvent<HTMLElement>) => {
        setSelectedResource(resource);
        setFormInfo({
            id: resource.id,
            name: resource.name,
            color: resource.color,
            year: resource.year,
            pantone_value: resource.pantone_value,
        });
        setAnchorEl(event.currentTarget);
    };
    const Deleted = async (id: number) => {
        await handleDelete(selectedResource.id); 
        setAnchorEl(null); 
    };



    const handleClose = () => {
        setAnchorEl(null);
    };

    const filteredResources = resource.filter((res) =>
        `${res.color} ${res.name}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <Typography variant="h6">Loading</Typography>;
    }


    return (
        <Paper sx={{ width: '100%', overflow: 'auto', fontSize: '10px' }}>
            <Typography variant="h6" gutterBottom sx={{ padding: 1 }}>
                Pantone
            </Typography>
            <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                <TextField
                    label="Search by Name"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ marginBottom: 2, height: 40, '& .MuiInputBase-root': { height: '100%' } }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <i className="fas fa-search"></i>
                            </InputAdornment>
                        ),
                    }}
                />

            </Box>
            <TableContainer sx={{ maxHeight: 340, overflow: 'auto' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Pantone Value</TableCell>
                            <TableCell>Year</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredResources.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((res) => (
                            <TableRow hover key={res.id}>
                                <TableCell>
                                    <Typography variant="body2" sx={{ color: res.color }}>{res.name}</Typography>
                                </TableCell>
                                <TableCell sx={{ color: res.color }}>{res.color}</TableCell>
                                <TableCell sx={{ color: res.color }}>{res.pantone_value}</TableCell>
                                <TableCell sx={{ color: res.color }}>{res.year}</TableCell>
                                <TableCell>
                                    <IconButton onClick={(e) => handleClickOpen(res, e)}>
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                                        <MenuItem sx={{ display: 'flex', gap: 2, fontWeight: 500 }}><Link to={`/detail-pantone/${selectedResource?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}><BiDetail /> Detail</Link></MenuItem>
                                        <MenuItem onClick={() => Deleted(selectedResource.id)}><MdOutlineDelete /> Delete</MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={filteredResources.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(e, newPage) => setPage(newPage)}
                onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value))}
            />


        </Paper>
    );
};

export default PantonePage;
