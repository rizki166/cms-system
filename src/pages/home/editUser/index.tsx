import { useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import { IUser } from "../../../types/app";
import useUser from "../../../hooks/auth/useUser";
import FormInput from "../../../component/formInput/formInput";
import { Link } from "react-router-dom";



const EditUser = () => {
    const { formInfo, errors, handleChange, handleEditUser } = useUser();

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "400px",
                p: 4,
                boxShadow: 6,
                borderRadius: 3,
                bgcolor: "rgba(255, 255, 255, 0.8)",
            }}
        >
            <Typography
                component="h1"
                variant="h5"
                textAlign="center"
                sx={{ color: "#2a3d54", fontWeight: "bold" }}
            >
                Sign In
            </Typography>
            <Box
                component="form"
                onSubmit={handleEditUser as any}
                sx={{ mt: 3 }}
            >
                <FormInput
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={formInfo.email}
                    onChange={handleChange}
                    error={errors.email} />
                <FormInput
                    id="first_name"
                    name="first_name"
                    label="First Name"
                    type="input"
                    value={formInfo.first_name}
                    onChange={handleChange}
                    error={errors.password} />
                <FormInput
                    id="last_name"
                    name="last_name"
                    label="Last Name"
                    type="input"
                    value={formInfo.last_name}
                    onChange={handleChange}
                    error={errors.password} />

                <FormInput
                    id="avatar"
                    name="avatar"
                    label="Avatar"
                    type="input"
                    value={formInfo.avatar}
                    onChange={handleChange}
                    error={errors.password} />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3,
                        mb: 2,
                        bgcolor: "#5e72e4",
                        "&:hover": {
                            bgcolor: "#4c63d2",
                        }
                    }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link to="/register" style={{ color: "#5e72e5" }}>
                            Dont have an account? Sign Up
                        </Link>
                    </Grid>
                </Grid>
            </Box>

        </Box>)
}

export default EditUser