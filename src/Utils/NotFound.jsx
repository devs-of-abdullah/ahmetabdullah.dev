import { useLocation, Link as RouterLink } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";

export default function NotFound() {
  const location = useLocation();

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        p: 4,
      }}
    >
      <Typography
        variant=""
        sx={{ mb: 3 }}
        component="h1"
        color="error"
        gutterBottom
      >
        404 Page Not Found
      </Typography>

      <Typography variant="" sx={{ mb: 3 }}>
        The page <b>{location.pathname}</b> does not exist.
      </Typography>
      
      <Button
        variant="contained"
        component={RouterLink} to="/"
        
        sx={{
          display: "flex",
          justifySelf: "center",
          background: "var(--background-second)",
          color: "var(--text-color)",
          
          borderRadius: 10,
          "&:hover": {
            transform: "scale(1.05)",
            transition: "all 0.3s ease",
          },
        }}
      >
        GO TO HOME
      </Button>
    </Container>
  );
}
