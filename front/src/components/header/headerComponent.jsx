import { AppBar, Toolbar, Button, Container } from "@mui/material";
import { StyledButton, useStyles, Title } from "./style";

export default function HeaderComponent() {
    const classes = useStyles();

    return (
        <AppBar color="secondary" position="static">
            <Container maxWidth="xl">
                <Toolbar className={classes.toolbar}>
                    <Title className={classes.title}>BikeStore</Title>
                    <div className={classes.navLinks}>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Features</Button>
                        <Button color="inherit">Portfolio</Button>
                        <Button color="inherit">Testimonials</Button>
                        <Button color="inherit">Contact</Button>
                    </div>
                    <StyledButton className={classes.loginButton} variant="contained">
                        Login
                    </StyledButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
