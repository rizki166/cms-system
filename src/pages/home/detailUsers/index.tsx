import React from "react";
import { Card, CardContent, Typography, CardMedia, Box, CircularProgress, Alert } from "@mui/material";
import useUser from "../../../hooks/auth/useUser"; // Menggunakan hook useUser
import TableInputDetailColumn from "../../../component/colomn/tableinputdetail";
import ContentLoader from "react-content-loader";

const ShimmerEffect = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="10" rx="10" ry="10" width="380" height="200" />

    <rect x="10" y="230" rx="5" ry="5" width="200" height="20" />
    <rect x="10" y="260" rx="5" ry="5" width="250" height="20" />
    <rect x="10" y="290" rx="5" ry="5" width="220" height="20" />
  </ContentLoader>
);

const UserDetail = () => {
  const { user, loading, error } = useUser();

  if (loading) {
    return (
      <Box sx={{ p: 3 }}>
        <Card>
          <ShimmerEffect />
        </Card>
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
