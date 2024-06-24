import { AppBar, Button, Container } from "@mui/material";
import { StyledButton as StyledButton, Title, ToolBar, NavLinks } from "./style";

export default function HeaderComponent() {
    return (
        <AppBar color="secondary" position="static">
            <Container maxWidth="xl">
                <ToolBar>
                    <Title>BikeStore</Title>
                    <NavLinks>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Features</Button>
                        <Button color="inherit">Portfolio</Button>
                        <Button color="inherit">Testimonials</Button>
                        <Button color="inherit">Contact</Button>
                    </NavLinks>
                    <StyledButton variant="contained">Login</StyledButton>
                </ToolBar>
            </Container>
        </AppBar>
    );
}
