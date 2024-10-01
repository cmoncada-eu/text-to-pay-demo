import { Box, Typography } from "@mui/material";
import dotenv from "dotenv";

dotenv.config();

export default function Home() {
  return (
    <>
      <Box sx={{ marginBottom: "16px" }}>
        <Typography variant="body-m">Home page</Typography>
      </Box>
    </>
  );
}
