import { Typography, Container, Grid } from "@mui/material";
import { Section, Card, CardContent, CardMedia } from "./style";

export default function PortfolioComponent() {
    return (
        <Section>
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardMedia image="https://source.unsplash.com/random" title="Image title" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Section 3 Title
                                </Typography>
                                <Typography>Description of Section 3.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardMedia image="https://source.unsplash.com/random" title="Image title" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Another Section 3 Title
                                </Typography>
                                <Typography>Description of Another Section 3.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Section>
    );
}
