import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

interface ExpandableBoxProps {
    expandedText: string;
    icon: React.ReactNode;
    expandedWidth?: number; // Optional: to customize width
    collapsedWidth?: number;
}

const ExpandableBox: React.FC<ExpandableBoxProps> = ({
    expandedText,
    icon,
    expandedWidth = 600,
    collapsedWidth = 90,
}) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded((prev) => !prev);
    };

    return (

        <Box
            onClick={handleToggle}
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: expanded ? `${expandedWidth}px` : `${collapsedWidth}px`,
                transition: 'width 0.3s ease',
                overflow: 'hidden',
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 1,
                cursor: 'pointer',
                px: 2,
                py: 1,
                whiteSpace: 'nowrap',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: expanded ? "10%" : "100%" }}>
                {icon}
            </Box>
            {expanded && (
                <Typography
                    variant="body1"
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                    {expandedText}
                </Typography>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: expanded ? "10%" : "100%" }}>
                {icon}
            </Box>
        </Box>
    );
};

export default ExpandableBox;
