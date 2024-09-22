import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      100: "#d4d3dd",
      200: "#a8a7bb",
      300: "#7d7a98",
      400: "#514e76",
      main: "#262254",
      600: "#1e1b43",
      700: "#171432",
      800: "#0f0e22",
      900: "#080711",
    },
    secondary: {
      100: "#ddd7e6",
      200: "#bbafce",
      300: "#9888b5",
      400: "#76609d",
      main: "#543884",
      600: "#432d6a",
      700: "#32224f",
      800: "#221635",
      900: "#110b1a",
    },
    error: {
      main: red.A400,
    },
  },
});
