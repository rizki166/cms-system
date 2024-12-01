import { Box, Button, Typography, } from "@mui/material";
import useUser from "../../../hooks/auth/useUser";
import FormInput from "../../../component/formInput/formInput";

export const AddUser = () => {
    const { formInfo, errors, handleChange, handleSubmit } = useUser();

    return (
        <Box
            sx={{
                width: "100%",
                p: 4,
                boxShadow: 6,
                borderRadius: 3,
            }}
        >
            <Typography variant="h4" component="h3" gutterBottom>
                Add New User
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
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
                    Save
                </Button>

            </Box>

        </Box>
    );
};


