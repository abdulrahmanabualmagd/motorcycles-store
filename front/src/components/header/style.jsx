import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
    },
    title: {
    },
    navLinks: {
        display: "flex",
        gap: theme.spacing(1),
    },
}));
