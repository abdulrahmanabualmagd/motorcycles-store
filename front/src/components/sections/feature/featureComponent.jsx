import { Typography, Container, Grid } from "@mui/material";
import { Paper, Section } from "./style";

export default function FeatureComponent() {
    return (
        <Section>
            <Container maxWidth="md">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <Typography variant="h4" component="h2" gutterBottom>
                                Section 2 Title
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Description of Section 2.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Section>
    );
}
