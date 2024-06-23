import { Box, Typography } from "@mui/material";

export default function FooterComponent() {
    return (
        <Box sx={{ p: 2, textAlign: "center", borderTop: "1px solid #e0e0e0" }}>
            <Typography variant="body2">&copy; 2024 My App</Typography>
        </Box>
    );
}
