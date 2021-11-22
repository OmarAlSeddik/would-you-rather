// mui imports //
import {
  createTheme,
  alpha,
  responsiveFontSizes,
  useMediaQuery,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { blue } from "@mui/material/colors";
// hook imports //
import { createContext, useMemo } from "react";

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
            main: alpha("#000", 0.2),
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
