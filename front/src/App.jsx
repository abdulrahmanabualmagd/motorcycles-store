import AuthProvider from "./context/authContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Box, createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import HeaderComponent from "./components/header/headerComponent";
import FooterComponent from "./components/footer/footerComponent";
export default function App() {
    const theme = createTheme({
        /* Custom Theme Goes Here */
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AuthProvider>
                    {/* Begin Application */}
                    <>
                        <Grid container direction="column" sx={{ minHeight: "100vh" }}>
                            <Grid item>
                                <HeaderComponent />
                            </Grid>
                            <Grid item sx={{ flex: 1 }}>
                                <RouterProvider router={router} />
                            </Grid>
                            <Grid item>
                                <FooterComponent />
                            </Grid>
                        </Grid>
                    </>
                    {/* End Application */}
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}
