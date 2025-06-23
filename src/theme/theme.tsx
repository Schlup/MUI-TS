import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#FFF149" }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10
                }
            }
        }
    },
    typography: {
        button: {
            fontSize: "1rem"
        }
    }
});

export default theme;