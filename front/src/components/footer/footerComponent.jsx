import { Typography, Container, Link } from "@mui/material";
import { useStyles } from "./style";
export default function FooterComponent() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
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
        </footer>
    );
}
