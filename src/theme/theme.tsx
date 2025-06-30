import { createTheme } from "@mui/material";


const h1 = 5;
const h2 = 4;
const h3 = 3;
const h4 = 2;

const theme = createTheme({
    typography: {

        h1: {
            fontSize: `${h1}rem`,
            '@media (max-width:600px)': {
                fontSize: `${h1 * 600 / 1920}rem`,
            },
            '@media (max-width:1300px)': {
                fontSize: `${h1 * 1300 / 1920}rem`,
            },
        },
        body1: {
            color: "white",
            fontSize: '2rem',

            '@media (max-width:600px)': {
                fontSize: `${2 * 600 / 1920}rem`,
            },
            '@media (max-width:1300px)': {
                fontSize: `${2 * 1300 / 1920}rem`,
            },
        },
    },
});

export default theme;


