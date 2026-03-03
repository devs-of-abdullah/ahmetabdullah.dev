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
    title: "HR Management System API",
    description:
      "Developed a Clean, layered ASP.NET Core Web API for employee management and HR operations. Implemented JWT authentication with refresh tokens and role-based authorization. Designed RESTful APIs using Entity Framework Core and SQL Server while ensuring scalability, maintainability, and separation of concerns.",
    codeLink: "https://github.com/devs-of-abdullah/HR_Management_System_API",
  },
  {
    title: "Chat System API",
    description:
      "Developed a secure real-time messaging platform using ASP.NET Core Web API and SignalR. Implemented JWT authentication and role-based authorization for secure user access. Applied Clean Architecture principles with Entities, DTOs, Repository, and Service layers to ensure maintainability and separation of concerns. Built RESTful APIs for conversation management and integrated Entity Framework Core with SQL Server for message persistence and conversation history. Enabled real-time user-to-user messaging using SignalR. ",
    codeLink: "https://github.com/devs-of-abdullah/Chat_System_API",
  },
  {
    title: " Bank System API",
    description:
      "Built a secure ASP.NET Core Web API following Clean Architecture and multilayered design principles. Developed RESTful APIs for user management, account operations, and transactional processing using Entity Framework Core and SQL Server. Implemented JWT authentication, role-based authorization, and database transaction handling to ensure secure and reliable banking operations.",
    codeLink: "https://github.com/devs-of-abdullah/Bank_System_API",
  },
  {
    title: "Auth API Template",
    description:
      "ASP.NET Core Web API starter template with layered architecture (API, Business, Data, Entities, DTO). Includes HTTPS + CORS foundation, JWT authentication, role-based authorization, ownership policies, refresh tokens & logout, rate limiting, and logging & auditing. Designed for secure, production-ready, and reusable backend projects.",
    codeLink: "https://github.com/devs-of-abdullah/Auth_Template_API_V1",
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
