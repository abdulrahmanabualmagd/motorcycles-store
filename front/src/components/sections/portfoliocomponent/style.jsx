import { styled, Card as crd, CardContent as crdContent, CardMedia as crdMedia } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: "#fff",
    minHeight: "50vh",
}));
export const Card = styled(crd)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
}));
export const CardContent = styled(crdContent)(({ theme }) => ({
    width: 160,
    flexShrink: 0,
}));
export const CardMedia = styled(crdMedia)(({ theme }) => ({
    flexGrow: 1,
}));
