import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import useRegister from "../../hooks/auth/useRegister";
import Background from "../../component/background/background";
import FormInput from "../../component/formInput/formInput";
import background from "../../assets/pexels-jplenio-1103970.jpg";

export default function Register() {
    const { formInfo, errors, handleChange, handleSubmit } = useRegister();

    return (
        <>
            <CssBaseline />
            <Grid
                container
                sx={{
                    height: "100vh",
                    width: "100vw",
                }}
            >
                <Background backgroundImage={background} />
                <Grid
                    item
                    xs={11.6}
                    sm={11}
                    md={10}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: 400,
                            padding: 4,
                            boxShadow: 6,
                            borderRadius: 3,
                            bgcolor: "rgba(255, 255, 255, 0.8)",
                        }}
                    >
                        <Typography
                            component="h1"
                            variant="h5"
                            textAlign="center"
                            sx={{ color: "#2a3d54", fontWeight: 600 }}
                        >
                            Register
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <FormInput
                                id="email"
                                name="email"
                                label="Email Address"
                                value={formInfo.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <FormInput
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={formInfo.password}
                                onChange={handleChange}
                                error={errors.password}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    bgcolor: "#5e72e4",
                                    "&:hover": { bgcolor: "#4c63d2" },
                                }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Link to="/login" style={{ color: "#5e72e5" }}>
                                    {"Have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
