import { styled, Paper as ppr } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
    padding: theme.spacing(8, 0),
    background: theme.palette.primary.main,
    minHeight: "50vh",
}));

export const Paper = styled(ppr)(({ theme }) => ({
    textAlign: "center",
}));
