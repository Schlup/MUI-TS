import { AppBar, Button, Grid, styled, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';

const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white"
})

const LoginButton = styled(Button)({
    backgroundColor: "lightgray",
    color: "black",
    '&:hover': {
        backgroundColor: 'white'
    },
    borderRadius: 8,
    paddingInline: 24
})


function Navbar() {
    return (
        <AppBar position="static">
            <StyleToolbar>
                <Typography color={"black"}>Alex</Typography>
                <Grid sx={{ gap: 6 }} color={"black"} display={{ xs: "none", md: "flex" }}>
                    <Typography>Card access</Typography>
                    <Typography>Banking</Typography>
                    <Typography>Processing</Typography>
                    <Typography>About</Typography>
                    <Typography>Carrier</Typography>
                    <Typography>Contact</Typography>
                </Grid>
                <Grid justifyContent={"center"} gap={{ md: 0, xs: 2 }} alignItems={"center"} display={"flex"}>
                    <LoginButton endIcon={<LoginIcon />}>Login</LoginButton>
                    <MenuIcon
                        sx={{
                            display: { xs: "block", md: "none" }, color: "black"
                        }} />
                </Grid>

            </StyleToolbar>
        </AppBar>
    )
}

export default Navbar