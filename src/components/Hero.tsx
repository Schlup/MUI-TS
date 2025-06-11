import { Button, Grid, Typography } from "@mui/material";
import heroImg from "../assets/images/Hero Section with bg.png";
import IniciarButton from "./ButtonTest";

function Hero() {
    return (
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
                <Grid display={"flex"} flexDirection={"column"} xs={6} justifyContent={"center"} alignItems={"center"} gap={4}>
                    <Typography sx={{ textAlign: { xs: "center" } }} variant="h5" color={"purple"}>Seamless Experience</Typography>
                    <Typography sx={{ fontSize: { xs: "16vw", md: "4vw" }, textAlign: { xs: "center" } }} variant="h1" textAlign={"center"} fontStyle={"bold"}>Unleashing the Next Generation of Card Solutions</Typography>
                    <Typography textAlign={"center"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempora dignissimos velit autem ea facilis, dolores, excepturi voluptatibus magni consequuntur eius? Deserunt natus dolore rerum! Laudantium repellat tempora iure dolorum.</Typography>
                    <Button variant="contained">Unlock your card</Button>
                    <Typography variant="body2">*No credit card required</Typography>
                    <IniciarButton textColor="#FFFF" mainColor="#2196F3" shadowColor="#FF242F">
                        Começar
                    </IniciarButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Hero;