// IniciarButton.tsx
import React, { useEffect, useRef } from 'react';
import { Button, Box } from '@mui/material';
import { gsap } from 'gsap';

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

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        gsap.from(buttonRef.current, {
            x: -500,        // Posição inicial: 500px para a esquerda
            opacity: 0,     // Começa invisível para um efeito mais suave
            duration: 1.5,  // Duração da animação
            ease: 'power3.out', // Easing para uma desaceleração natural
        });
    }, []); // <-- Array vazio significa "rodar uma vez após a montagem"

    return (
        <Box
            ref={buttonRef}
            sx={{
                position: 'relative',
                display: 'inline-block',
            }}
        >
            {/* Sombra personalizada */}
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

            {/* Botão principal com cores dinâmicas */}
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
