import { Typography, Container, Grid, Button } from "@mui/material";
import { useStyles } from "./style";

export default function CallToActionComponent() {
    const classes = useStyles();

    return (
        <section className={classes.section}>
            <Container maxWidth="md">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Section 4 Title
                        </Typography>
                        <Typography paragraph>Description of Section 4.</Typography>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Action Button
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://source.unsplash.com/random" alt="random" style={{ maxWidth: "100%" }} />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}
