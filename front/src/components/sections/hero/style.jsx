import { styled } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    textAlign: "center",
    minHeight: "80vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",

    overflow: "hidden",

    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url(https://images.pexels.com/photos/5667323/pexels-photo-5667323.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.5, // Adjust the opacity value here
        zIndex: 0, // Ensure the pseudo-element is behind the content
    },
}));
