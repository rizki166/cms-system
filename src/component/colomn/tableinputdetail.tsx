import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

interface TableInputDetailColumnProps {
    title?:
    | string
    | {
        value: string;
        props?: React.ComponentProps<typeof Typography>;
    };
    props?: React.ComponentProps<typeof Box>;
    hideDivider?: boolean;
    isResponsive?: 'desktop' | 'mobile' | 'auto';
    children?: React.ReactNode;
}

const TableInputDetailColumn: FC<TableInputDetailColumnProps> = ({
    children,
    title,
    props,
    hideDivider = false,
    isResponsive = 'auto',
}) => {
    const titleValue = typeof title === 'string' ? title : title?.value;
    const titleProps = typeof title === 'object' && title.props ? title.props : {};

    return (
        <Box
            sx={{
                position: 'relative',
                ...props?.sx,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row', 
                gap: 2,
                mb: 2, 
            }}
            {...props}
        >
            {/* Bagian Title */}
            {titleValue && (
                <Typography
                    {...titleProps}
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '0.875rem',
                        flex: '0 0 30%', 
                        textAlign: 'left',
                        ...titleProps?.sx,
                    }}
                >
                    {titleValue}
                </Typography>
            )}

            <Box
                sx={{
                    flex: 1, 
                    textAlign: 'left',
                    fontSize: '0.875rem',
                }}
            >
                {children}
            </Box>

            {!hideDivider && <Divider sx={{ position: 'absolute', bottom: '-1px', width: '100%' }} />}
        </Box>
    );
};

export default TableInputDetailColumn;
