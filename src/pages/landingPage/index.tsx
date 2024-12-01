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
import ContentLoader from "react-content-loader";

const ShimmerEffect = () => (
  <Card elevation={3}>
    <ContentLoader
      speed={2}
      width="100%"
      height={"100%"}
      viewBox="0 0 400 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="50%" />
      <rect x="16" y="220" rx="5" ry="5" width="60%" height="20" />
      <rect x="16" y="250" rx="5" ry="5" width="80%" height="20" />
      <rect x="16" y="290" rx="10" ry="10" width="30" height="30" />
      <rect x="56" y="290" rx="10" ry="10" width="30" height="30" />
      <rect x="96" y="290" rx="10" ry="10" width="30" height="30" />
    </ContentLoader>
  </Card>
);

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
        <>
          <Box display="flex" justifyContent="center" my={5}>
            <CircularProgress />
          </Box>
          <Grid container spacing={4}>

            {Array.from({ length: 6 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ShimmerEffect />
              </Grid>
            ))}
          </Grid>
          ) : error ? (
          <Typography color="error" textAlign="center">
            {error}
          </Typography>
        </>
      ) : (
        <Grid container spacing={4}>
          {users.map((user: any) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="200"
                  image={user.avatar}
                  alt={user.first_name}
                />
                <CardContent>
                  <Typography variant="h6">
                    {user.first_name} {user.last_name}
                  </Typography>
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
