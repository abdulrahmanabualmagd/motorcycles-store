import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    hero: {
        padding: theme.spacing(8, 0),
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        textAlign: "center",
        minHeight: "80vh",
    },
}));