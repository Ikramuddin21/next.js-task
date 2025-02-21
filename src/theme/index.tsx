"use client";

import { useMemo } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

// system
import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";
// options
import { componentsOverrides } from "./overrides";
import { customShadows } from "@/theme/custom-shadows";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const memoizedValue = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 950,
          lg: 1200,
          xl: 1536,
        },
      },
      palette: {
        ...palette,
      },
      customShadows: {
        ...customShadows(),
      },
      shadows: shadows(),
      shape: { borderRadius: 8 },
      typography: {
        h1: {
          fontSize: "32px",
          lineHeight: "38px",
        },
        h2: {
          fontSize: "24px",
          lineHeight: "36px",
        },
        h3: {
          fontSize: "18px",
          lineHeight: "28px",
        },
        subtitle1: {
          fontSize: "11px",
          color: "#919EAB",
          lineHeight: "18px",
        },
      },
    }),
    []
  );

  const theme = createTheme(memoizedValue as ThemeOptions);

  theme.components = componentsOverrides(theme);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
