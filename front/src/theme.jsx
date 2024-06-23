import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#6947cf",
        },
        secondary: {
            main: "#fff3f3",
            contrastText: "#000000",
        },
    },
    components:{
      MuiButton:{
        styleOverrides:{
          root:{
            padding:'10px 30px'
            
          }
        }
      }
    }
});
