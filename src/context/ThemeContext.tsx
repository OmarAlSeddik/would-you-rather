import { createContext, useMemo } from "react";
import {
  createTheme,
  alpha,
  responsiveFontSizes,
  useMediaQuery,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { blue } from "@mui/material/colors";

const ThemeContext = createContext({
  theme: {},
  isMobile: false,
});

export const ThemeContextProvider = (props: any) => {
  let theme: any = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: blue[900],
          },
          secondary: {
            main: alpha(blue[900], 0.2),
          },
          background: {
            default: alpha("#fff", 0.1),
            paper: alpha("#fff", 0.95),
          },
        },
        shape: {
          borderRadius: 12,
        },
      }),
    []
  );

  theme = responsiveFontSizes(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeContext.Provider value={{ theme, isMobile }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
