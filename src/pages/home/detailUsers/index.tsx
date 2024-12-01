import { Card, CardContent, Typography, CardMedia, Box, Alert, CircularProgress } from "@mui/material";
import useUser from "../../../hooks/auth/useUser"; 
import TableInputDetailColumn from "../../../component/colomn/tableinputdetail";



const UserDetail = () => {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <Box sx={{ p: 3 }}>
              <CircularProgress />

      </Box>
    );
  }

  if (!user) {
    return <Alert severity="warning">User not found</Alert>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Card>
        <CardMedia
          component="img"
          alt={`${user.first_name} ${user.last_name}`}
          height="200"
          image={user.avatar}
        />
        <CardContent>
          <TableInputDetailColumn
            title={{
              value: 'First Name',
              props: { color: 'text.secondary', sx: { fontSize: '0.875rem' } },
            }}
          >
            <Typography variant="body2">{user.first_name}</Typography>
          </TableInputDetailColumn>
          <TableInputDetailColumn
            title={{
              value: 'Last Name',
              props: { color: 'text.secondary', sx: { fontSize: '0.875rem' } },
            }}
          >
            <Typography variant="body2">{user.last_name}</Typography>
          </TableInputDetailColumn>
          <TableInputDetailColumn title={{ value: 'Email', props: { color: 'text.secondary' } }}>
            <Typography variant="body1" color="text.secondary">{user.email}</Typography>
          </TableInputDetailColumn>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserDetail;
