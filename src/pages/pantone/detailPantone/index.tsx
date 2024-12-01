import { Alert, Box, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import TableInputDetailColumn from "../../../component/colomn/tableinputdetail";
import useDetail from "../../../hooks/pantone/detailresource";

const DetailPantone = () => {
    const { resources, loading, } = useDetail();

    if (loading) {
        return <CircularProgress />;
    }

    if (!resources) {
        return <Alert severity="warning">Resource not found</Alert>;
    }

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <Box sx={{ p: 2 }}>
                    <Typography variant="h5">Detail Pantone</Typography>
                </Box>
                <CardContent>
                    <TableInputDetailColumn
                        title={{
                            value: 'Name',
                            props: { color: 'text.secondary', sx: { fontSize: '0.875rem' } },
                        }}
                    >
                        <Typography sx={{ color: resources.color }} variant="body2">
                            {resources.name}
                        </Typography>
                    </TableInputDetailColumn>

                    <TableInputDetailColumn
                        title={{
                            value: 'Color',
                            props: { color: 'text.secondary', sx: { fontSize: '0.875rem' } },
                        }}
                    >
                        <Typography sx={{ color: resources.color }} variant="body2">
                            {resources.color}
                        </Typography>
                    </TableInputDetailColumn>

                    <TableInputDetailColumn
                        title={{
                            value: 'Pantone Value',
                            props: { color: 'text.secondary', sx: { fontSize: '0.875rem' } },
                        }}
                    >
                        <Typography sx={{ color: resources.color }} variant="body2">
                            {resources.pantone_value}
                        </Typography>
                    </TableInputDetailColumn>
                    <TableInputDetailColumn
                        title={{
                            value: 'Pantone Value',
                            props: { color: 'text.secondary', sx: { fontSize: '0.875rem' } },
                        }}
                    >
                        <Typography sx={{ color: resources.color }} variant="body2">
                            {resources.year}
                        </Typography>
                    </TableInputDetailColumn>
                </CardContent>
            </Card>
        </Box>
    );
};

export default DetailPantone;
