import { Button as btn, styled, Toolbar as tlbr } from "@mui/material";

export const ToolBar = styled(tlbr)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1, 1),
}));

export const NavLinks = styled("div")(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(1),
}));

export const StyledButton = styled(btn)(({ theme }) => ({
    padding: theme.spacing(1, 3),
}));

export const Title = styled("div")(({ theme }) => ({
    fontSize: "2rem",
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: "Time",
}));
