import { Box, Typography } from "@mui/material";
import dotenv from "dotenv";
import Header from "./components/Header";

dotenv.config();

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ marginBottom: "16px" }}>
        <Typography variant="body-m">Home page</Typography>
      </Box>
    </>
  );
}
