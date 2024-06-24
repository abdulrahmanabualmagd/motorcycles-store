import { Button as btn } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
    },
    navLinks: {
        display: "flex",
        gap: theme.spacing(1),
    },
}));

export const StyledButton = styled(btn)`
    padding: 0.3em 1.6em;
`;
export const Title = styled.div`
    font-size: 1.9em;
    font-weight: bold;
    font-style: italic;
    font-family: Time
`;
