import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { useStyles } from "./style";

export default function HeaderComponent() {
    const classes = useStyles();

    return (
        <AppBar color="secondary" position="static">
            <Container maxWidth="xl">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title}>BikeStore</Typography>
                    <div className={classes.navLinks}>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Features</Button>
                        <Button color="inherit">Portfolio</Button>
                        <Button color="inherit">Testimonials</Button>
                        <Button color="inherit">Contact</Button>
                    </div>
                    <Button className={classes.loginButton} variant="contained">
                        Login
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
