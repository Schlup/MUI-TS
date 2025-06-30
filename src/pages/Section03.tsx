import { Button, Grid, Typography } from '@mui/material'
import { useEffect, type ReactElement } from 'react';

import gsap from 'gsap'


interface FooterProps {
    title: string;
    text: string;

    svg1?: ReactElement;
    svg1Top?: string;
    svg1Bottom?: string;
    svg1Right?: string;
    svg1Left?: string;
    svg1Animation?: string;

    svg2?: ReactElement;
    svg2Top?: string;
    svg2Bottom?: string;
    svg2Right?: string;
    svg2Left?: string;
    svg2Animation?: string;

    svg3?: ReactElement;
    svg3Top?: string;
    svg3Bottom?: string;
    svg3Right?: string;
    svg3Left?: string;
    svg3Animation?: string;

    onButtonClick: () => void;
}


const Section03: React.FC<FooterProps> = ({
    title,
    text,

    svg1,
    svg1Top,
    svg1Bottom,
    svg1Right,
    svg1Left,
    svg1Animation,

    svg2,
    svg2Top,
    svg2Bottom,
    svg2Right,
    svg2Left,
    svg2Animation,

    svg3,
    svg3Top,
    svg3Bottom,
    svg3Right,
    svg3Left,
    svg3Animation,

    onButtonClick,
}) => {

    useEffect(() => {
        gsap.to(`.${svg1Animation}`, {
            rotation: 360,
            duration: 5,
            ease: "none",
            repeat: -1,
        })
        gsap.to(`.${svg2Animation}`, {
            rotation: -360,
            duration: 5,
            ease: "none",
            repeat: -1,
        });
        gsap.to(`.${svg3Animation}`, {
            scale: 1.2,
            rotation: -360,
            opacity: 0,
            duration: 0.2,
            stagger: {
                each: 0.5,
                repeat: -1
            }
        })
    }, [svg1Animation, svg2Animation, svg3Animation])

    return (


        <Grid container bgcolor={"black"} overflow={"hidden"} minHeight={"100vh"} justifyContent={"center"} position={"relative"}>
            <Grid container sm={9} overflow={"hidden"}>
                <Grid container zIndex={3}>
                    <Typography variant='h1'>{title}</Typography>
                </Grid>
                <Grid container zIndex={3}>
                    <Typography variant='body1'>{text}</Typography>
                </Grid>
                <Grid overflow={"hidden"} container xs={12} zIndex={1}>
                    <Grid className={`${svg1Animation}`} container xs={4} position={"absolute"} top={svg1Top} bottom={svg1Bottom} left={svg1Left} right={svg1Right}>
                        {svg1}
                    </Grid>
                    <Grid className={`${svg2Animation}`} container xs={4} position={"absolute"} top={svg2Top} bottom={svg2Bottom} left={svg2Left} right={svg2Right}>
                        {svg2}
                    </Grid>
                    <Grid className={`${svg3Animation}`} container xs={4} position={"absolute"} top={svg3Top} bottom={svg3Bottom} left={svg3Left} right={svg3Right}>
                        {svg3}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"} zIndex={4}>
                <Button variant='contained' onClick={onButtonClick}>Alex</Button>
            </Grid>
        </Grid>
    )
}

export default Section03

