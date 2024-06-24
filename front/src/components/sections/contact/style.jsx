import { styled, Button as btn } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: theme.palette.secondary.main,
    minHeight: "50vh",
}));

export const Form = styled("form")(({ theme }) => ({
    padding: theme.spacing(1),
}));

export const Button = styled(btn)(({ theme }) => ({
    marginTop: theme.spacing(2),
}));
