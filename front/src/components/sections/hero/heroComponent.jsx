import { Grid, Typography, Button } from "@mui/material";
import {useStyles} from "./style";

export default function HeroComponent() {
    const classes = useStyles();

    return (
        <Grid container className={classes.hero} alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h1" component="h1" gutterBottom>
                    Welcome to MyApp
                </Typography>
                <Typography paragraph gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eu quam tincidunt
                    lobortis.
                </Typography>
                <Button variant="contained" color="primary">
                    Get Started
                </Button>
            </Grid>
        </Grid>
    );
}
