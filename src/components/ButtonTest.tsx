import React from 'react';
import { Button, Box } from '@mui/material';


interface IniciarButtonProps {
    mainColor?: string;     // Cor principal do botão
    textColor?: string;     // Cor do texto
    shadowColor?: string;   // Cor da sombra
    children?: React.ReactNode; // Texto do botão (opcional)
}

const IniciarButton: React.FC<IniciarButtonProps> = ({
    mainColor = '#673AB7',
    textColor = 'white',
    shadowColor = 'black',
    children = 'INICIAR',
}) => {

    return (
        <Box

            sx={{
                position: 'relative',
                display: 'inline-block',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    width: '100%',
                    height: '100%',
                    bgcolor: shadowColor,
                    borderRadius: '12px',
                    zIndex: 0,
                }}
            />
            <Button
                variant="contained"
                sx={{
                    bgcolor: mainColor,
                    color: textColor,
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    padding: '12px 32px',
                    borderRadius: '12px',
                    textTransform: 'uppercase',
                    zIndex: 1,
                    position: 'relative',
                    minWidth: '200px',
                    '&:hover': {
                        bgcolor: mainColor, // mantém a mesma cor no hover
                    },
                }}
            >
                {children}
            </Button>
        </Box>
    );
};

export default IniciarButton;
