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
    title: " Bank System API",
    description:
      " An employee management backend API built with ASP.NET Core, supporting employee, role, and department management. Implements clean, layered architecture, relational data modeling, and validation using Entity Framework Core.",
    codeLink: "https://github.com/devs-of-abdullah/Banksystem_API",
  },
  {
    title: "Chat System API",
    description:
      "A real-time chat backend built with ASP.NET Core and SignalR, enabling instant user-to-user messaging. Designed using clean, layered architecture with DTO-based data transfer, validation, and Entity Framework Core for data persistence.",
    codeLink: "https://github.com/devs-of-abdullah/Chat_System_API",
  },
  {
    title: "Employee Management System API",
    description:
      "A banking system API developed with ASP.NET Core to manage accounts, deposits, withdrawals, and inter-account transfers. Focuses on secure transaction workflows, business rule validation, and clean architecture using Entity Framework Core.",
    codeLink:
      "https://github.com/devs-of-abdullah/Employee-Management-System_API",
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
