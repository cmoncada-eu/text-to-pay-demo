"use client";
import { ThemeProvider } from "@mui/material/styles";
import { CheckUserWidth_Provider } from "@/lib/userDeviceContext";
import { theme } from "@/theme";

export function StyledRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CheckUserWidth_Provider>{children}</CheckUserWidth_Provider>
    </ThemeProvider>
  );
}
