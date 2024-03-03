import { colors, createTheme } from "@mui/material";


export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.blue[500],
    },
    secondary: {
      main: colors.blue[500],
    },
  },
  typography: {
    fontFamily: ['"Ubuntu"', "Helvetica", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
