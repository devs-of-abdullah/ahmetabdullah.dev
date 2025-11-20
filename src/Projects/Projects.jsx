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
    title: "Library Management System API",
    description:
      "Library Management System backend APIs built with ASP.NET Core and Entity Framework Core for managing books, users, and loans and many operations. It simulates a real-world library workflow, including JWT authentication.",
    codeLink:
      "https://github.com/devs-of-abdullah/Smart-Libary-Management-System",
  },
  {
    title: "Chat App Backend API",
    description:
      " A structured 4-layer messaging application built with C# and EF Core. It supports 3 communication modes: direct messages, received messages, and group messages. The system includes secure JWT authentication, user login, and a clean architecture divided into API, Business, Data, and Entity layers",
    codeLink: "https://github.com/devs-of-abdullah/ChatApp_Backend_API",
  },
  {
    title: " Bank System API",
    description:
      " backend system allowing users to register, log in, and manage financial data. It handles Users, Accounts, and Transactions, offering endpoints to create accounts, record transactions, and retrieve user information—all built on a clean 3-tier .NET architecture.",
    codeLink: "https://github.com/devs-of-abdullah/Banksystem_API",
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
