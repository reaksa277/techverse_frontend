import { createTheme, ThemeProvider as MUIThemeProvider, PaletteOptions } from "@mui/material";
import { ReactNode, useMemo } from "react";
import { palette } from "./palette";
import { typography } from "./typography";

type Props = {
    children: ReactNode;
    mode?: "light" | "dark";
}

export default function ThemeProvider({ children, mode = "light" }: Props) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: palette(mode) as PaletteOptions,
        typography,
        shape: { borderRadius: 16 },
      }),
    [mode]
  );

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
