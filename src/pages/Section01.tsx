import { Box, Button, Grid, Typography } from "@mui/material";
import heroImg from "../assets/images/Hero Section with bg.png";
import IniciarButton from "../components/ButtonTest";
import { useEffect, useRef } from "react";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

function Section01() {
    const main = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".iniciar-button-wrapper", {
                x: -600,
                opacity: 0,
                duration: 1.5,
                ease: 'power3.out',
            });
        }, main);

        return () => ctx.revert();
    }, []);

    return (
        <Grid ref={main}>
            <Grid sx={{
                backgroundImage: `url(${heroImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>

                <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    minHeight={"100vh"}
                >
                    <Grid display={"flex"} flexDirection={"column"} item xs={10} md={6} justifyContent={"center"} alignItems={"center"} gap={4}>
                        <Typography sx={{ textAlign: { xs: "center" } }} variant="h5" color={"purple"}>Seamless Experience</Typography>
                        <Typography sx={{ fontSize: { xs: "16vw", md: "4vw" }, textAlign: { xs: "center" } }} variant="h1" fontStyle={"bold"}>Unleashing the Next Generation of Card Solutions</Typography>
                        <Typography textAlign={"center"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempora dignissimos velit autem ea facilis, dolores, excepturi voluptatibus magni consequuntur eius? Deserunt natus dolore rerum! Laudantium repellat tempora iure dolorum.</Typography>
                        <Button variant="contained">Unlock your card</Button>
                        <Typography variant="body2">*No credit card required</Typography>

                        {/* 5. Usamos uma classe para o Box que envolve o IniciarButton */}
                        <Box className="iniciar-button-wrapper">
                            <IniciarButton textColor="#FFFF" mainColor="#2196F3" shadowColor="#FF242F">
                                Começar
                            </IniciarButton>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Section01;