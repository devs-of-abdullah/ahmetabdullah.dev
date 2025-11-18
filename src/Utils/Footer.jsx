import { Box, Typography, Divider } from "@mui/material";


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        display:"flex",
        justifyContent:"center"
      }}
    >
      <Typography variant=""  textAlign="center">
        <Divider sx={{ backgroundColor: "var(--background-second)", height: 4, m: 2 }}/>

       Ahmet Abdullah 2025 © . All rights reserved.
      </Typography>
    </Box>
  );
}
