import Grid from "@mui/material/Grid";

interface BackgroundProps {
    backgroundImage: string;
}

const Background: React.FC<BackgroundProps> = ({ backgroundImage }) => (
    <Grid
        item
        xs={12}
        sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
        }}
    />
);

export default Background;
