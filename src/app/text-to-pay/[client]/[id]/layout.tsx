import { Box } from "@mui/material";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Box sx={{ padding: "16px 24px" }}>{children}</Box>;
}
