import { styled, Card as crd } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: "#fff",
    minHeight: "50vh",
}));

export const Card = styled(crd)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    height: "100%",
}));
