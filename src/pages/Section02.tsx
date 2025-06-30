import { Grid, Typography } from "@mui/material"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";


function Section02() {
    const main = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".alex-text", { // Usamos uma classe como seletor seguro dentro do contexto
                x: -300,             // Virá da esquerda
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ".alex-text",
                    start: "top 80%",      // Começa quando o topo do elemento atinge 80% da altura da janela
                    toggleActions: "play none none none", // Apenas executa a animação uma vez quando entra
                }
            });
            return () => ctx.revert();
        })
    }, []);

    return (
        <Grid ref={main}>
            <Grid container minHeight={"100vh"} justifyContent={"center"} alignItems={"center"}>
                <Typography className="alex-text" variant="h2">Alex</Typography>
            </Grid>
        </Grid>
    )
}

export default Section02