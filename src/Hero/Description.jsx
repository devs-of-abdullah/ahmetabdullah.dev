import { Container, Typography, Divider } from "@mui/material";


export default function Description() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="" fontSize={{ xs: 40, md: 60 }} component="h1">
        Ahmet Abdullah
      </Typography>

      <Typography fontSize={20} variant="" color="var(--text-color-second)">
        Full-Stack Developer
      </Typography>
      <Divider
        sx={{ backgroundColor: "var(--background-second)", height: 4, m: 2 }}
      />

      <Typography variant="" component="p" m={2}>
        Backend-focused third-year Software Engineering student with hands-on
        experience developing secure and scalable ASP.NET Core Web APIs using
        Clean Architecture and layered architecture principles. Strong
        foundation in C#, Entity Framework Core, SQL Server, RESTful API
        development,authentication, and authorization. Seeking a software
        development internship to contribute to realworld backend projects and
        further develop professional engineering skills.
      </Typography>
    </Container>
  );
}
