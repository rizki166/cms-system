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
  Button,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  InputAdornment,
  Box,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
import { IoAdd } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import useUser from '../../hooks/auth/useUser';
import EditModal from '../../component/modal/modalEdit';

const Home = () => {
  const { users, loading, error, handleDeleteUser, handleEditUser, formInfo, setFormInfo, handleChange, } = useUser();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClickOpen = (user: any, event: React.MouseEvent<HTMLElement>) => {
    setSelectedUser(user);
    setFormInfo({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      avatar: user.avatar,
    });
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmitEdit = async () => {
    if (selectedUser) {
      await handleEditUser(selectedUser.id);
      setOpenEditModal(false);
      setAnchorEl(null);
    }
  };

  const handleDelete = async () => {
    if (selectedUser) {
      await handleDeleteUser(selectedUser.id);
      setAnchorEl(null);
    }
  };

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" color="error">Error fetching users: {error}</Typography>;
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'auto', fontSize: '10px' }}>
      
      <Typography variant="h6" gutterBottom sx={{ padding: 1 }}>
        Personnel Register
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
        <Button sx={{ backgroundColor: '#437fff', color: 'white', height: '40px', gap: 1 }}>
          <CiSearch size={45} />
          Search
        </Button>
        <Link to='add'>
          <Button sx={{ backgroundColor: '#437fff', color: 'white', height: '40px', gap: 1 }}>
            <IoAdd size={20} /> Add
          </Button>
        </Link>
      </Box>
      <TableContainer sx={{ maxHeight: 340, overflow: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
              <TableRow hover key={user.id}>
                <TableCell>
                  <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} width={40} height={40} style={{ borderRadius: '100%' }} />
                </TableCell>
                <TableCell>{user.first_name} {user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <IconButton onClick={(e) => handleClickOpen(user, e)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem><Link to={`/detail/${selectedUser?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}><BiDetail /> Detail</Link></MenuItem>
                    <MenuItem onClick={() => setOpenEditModal(true)}><MdOutlineEdit /> Edit</MenuItem>
                    <MenuItem onClick={() => handleDelete()}><MdOutlineDelete /> Delete</MenuItem>
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
        count={filteredUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value))}
      />

      <EditModal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        formInfo={formInfo}
        handleChange={handleChange}
        onSubmit={handleSubmitEdit}
      />
    </Paper>
  );
};

export default Home;
