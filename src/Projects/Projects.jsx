import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title: "Smart Library Management System API",
    description:
      "The Smart Library Management System is a backend API built with ASP.NET Core and Entity Framework Core for managing books, users, and borrowing operations. It simulates a real-world library workflow, including borrow/return rules, late fees, soft deletes, and JWT authentication.",
    codeLink:
      "https://github.com/devs-of-abdullah/Smart-Libary-Management-System",
  },
  {
    title: "E-Commerce Backend API",
    description:
      "The E-Commerce Backend API is a backend system built with ASP.NET Core Web API and Entity Framework Core.It manages products, categories, carts, orders, and discounts, simulating real-world e-commerce workflows.",
    codeLink: "https://github.com/devs-of-abdullah/E-Commerce-Backend-API",
  },
  {
    title: " Hotel Booking & Reservation System API",
    description:
      "It is a backend API project built with ASP.NET Core web API and Entity Framework Core. It manages rooms, room types, bookings, and pricing, including date conflict validation and invoice generation",
    codeLink:
      "https://github.com/devs-of-abdullah/Hotel-Booking-And-Reservation-System-API",
  },
 
];

export default function Projects() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", px: 2 }}>
      <Typography
        variant=""
        fontSize={50}
        textAlign="center"
        gutterBottom
        sx={{ mb: 6 }}
      >
        Projects
      </Typography>
      <Grid justifyContent="center">
        {projects.map((project) => (
          <Box>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                m: 2,
                background: "var(--background)",
                border: "3px solid var(--text-color)",
                borderRadius: "10px",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 20px rgba(192, 204, 192, 0.5)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant=""
                  gutterBottom
                  sx={{
                    color: "var(--text-color)",
                    fontWeight: "bold",
                    fontSize: 30,
                  }}
                >
                  {project.title}
                  <br />
                  <br />
                </Typography>
                <Typography color="var(--text-color-second)" variant="">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}>
                <Button
                  size="small"
                  variant=""
                  sx={{
                    background: "linear-gradient(45deg, #182d2aff, #277475ff)",
                    color: "var(--text-color)",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, #253133ff, #3e4759ff)",
                    },
                  }}
                  href={project.codeLink}
                  target="_blank"
                  startIcon={<GitHubIcon />}
                >
                  View Code
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Grid>
      <Button
        href="https://github.com/devs-of-abdullah?tab=repositories"
        sx={{
          display: "flex",
          justifyContent:"center",
          background: "var(--background-second)",
          color: "var(--text-color)",
       
          textAlign:"center",
          borderRadius: 10,
          "&:hover": {
            transform: "scale(1.05)",
            transition: "all 0.3s ease",
          },
        }}
      >
        See More
      </Button>
    </Box>
  );
}
