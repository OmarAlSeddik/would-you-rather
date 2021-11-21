import { createContext, useMemo } from "react";
import {
  createTheme,
  alpha,
  responsiveFontSizes,
  useMediaQuery,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { grey, blue } from "@mui/material/colors";

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
            main: grey[900],
          },
          secondary: {
            main: alpha(blue[400], 0.2),
          },
          background: {
            default: alpha(blue[400], 0.1),
          },
        },
        shape: {
          borderRadius: 8,
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
