import { Typography, Container, Grid, TextField } from "@mui/material";
import { Form, Section, Button } from "./style";

export default function ContactComponent() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Section>
            <Container maxWidth="md">
                <Typography variant="h4" align="center" gutterBottom>
                    Contact Us
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Form onSubmit={handleSubmit}>
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
                                    <Button type="submit" variant="contained" color="primary">
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    </Grid>
                </Grid>
            </Container>
        </Section>
    );
}
