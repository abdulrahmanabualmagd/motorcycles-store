import { Typography, Container, Grid } from "@mui/material";
import { Button, Section } from "./style";

export default function CallToActionComponent() {
    return (
        <Section>
            <Container maxWidth="md">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Section 4 Title
                        </Typography>
                        <Typography paragraph>Description of Section 4.</Typography>
                        <Button variant="contained" color="primary">
                            Action Button
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://source.unsplash.com/random" alt="random" style={{ maxWidth: "100%" }} />
                    </Grid>
                </Grid>
            </Container>
        </Section>
    );
}
