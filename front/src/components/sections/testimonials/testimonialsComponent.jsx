import { Typography, Container, Grid, CardContent } from "@mui/material";
import { Card, Section } from "./style";

export default function TestimonialsComponent() {
    return (
        <Section>
            <Container maxWidth="md">
                <Typography variant="h4" align="center" gutterBottom>
                    Testimonials
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1" gutterBottom>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia risus eget
                                    dolor consequat, nec pharetra augue ultricies."
                                </Typography>
                                <Typography variant="subtitle1">- John Doe</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1" gutterBottom>
                                    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                    turpis egestas."
                                </Typography>
                                <Typography variant="subtitle1">- Jane Smith</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1" gutterBottom>
                                    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                    curae."
                                </Typography>
                                <Typography variant="subtitle1">- Emily Johnson</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Section>
    );
}
