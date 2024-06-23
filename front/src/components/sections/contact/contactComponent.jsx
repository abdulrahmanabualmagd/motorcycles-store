import { Typography, Container, Grid, TextField, Button } from "@mui/material";
import {useStyles} from "./style";

export default function ContactComponent() {
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <section className={classes.section}>
            <Container maxWidth="md">
                <Typography variant="h4" align="center" gutterBottom>
                    Contact Us
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Name" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Email" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        className={classes.submitButton}
                                    >
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}
