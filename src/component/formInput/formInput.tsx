import TextField from "@mui/material/TextField";

interface FormInputProps {
    id: string;
    name: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;

}

const FormInput: React.FC<FormInputProps> = ({ id, name, label, type = "text", value, onChange, error }) => (
    <TextField
        fullWidth
        margin="normal"
        id={id}
        name={name}
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        error={!!error}
        helperText={error}
        sx={{
            color: "black",
        }}
    />
);

export default FormInput;
