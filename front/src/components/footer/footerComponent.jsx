import { Typography, Container, Link } from "@mui/material";
import { Footer } from "./style";
export default function FooterComponent() {
    return (
        <Footer>
            <Container maxWidth="md">
                <Typography variant="h6" align="center" gutterBottom>
                    MyWebsite
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Building the future, one line of code at a time.
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    {"© "}
                    {new Date().getFullYear()}{" "}
                    <Link color="inherit" href="https://mywebsite.com/">
                        MyWebsite
                    </Link>
                    {". All rights reserved."}
                </Typography>
            </Container>
        </Footer>
    );
}
