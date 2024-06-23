import { Typography, Container, Grid, Paper } from "@mui/material";
import {useStyles} from "./style";

export default function FeatureComponent() {
    const classes = useStyles();

    return (
        <section className={classes.section}>
            <Container maxWidth="md">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12}>
                        <Paper className={classes.sectionContent} elevation={0}>
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
        </section>
    );
}
