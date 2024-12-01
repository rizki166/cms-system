import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Box,
  CircularProgress,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import userss from "../../hooks/auth/users";

const LandingPage = () => {
  const { users, loading, error } = userss();

  return (
    <Container>
      <Box textAlign="center" my={4}>
        <Typography variant="h4" component="h3" gutterBottom>
          Our Creative <span style={{ color: "#3f51b5" }}>Team</span>
        </Typography>
       
        <Box
          height={4}
          width={60}
          bgcolor="#3f51b5"
          mx="auto"
          my={2}
          borderRadius={2}
        />
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" my={5}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" textAlign="center">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {users.map((user: any) => (
            <Grid item xs={12} sm={12} md={5} key={user.id}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="300"
                  image={user.avatar}
                  alt={user.first_name}
                />
                <CardContent>
                  <Typography variant="h6">{user.first_name} {user.last_name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {user.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="facebook">
                    <Facebook />
                  </IconButton>
                  <IconButton aria-label="twitter">
                    <Twitter />
                  </IconButton>
                  <IconButton aria-label="linkedin">
                    <LinkedIn />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default LandingPage;
