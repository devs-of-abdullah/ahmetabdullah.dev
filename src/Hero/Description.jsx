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
        .NET Backend Developer
      </Typography>
      <Divider
        sx={{ backgroundColor: "var(--background-second)", height: 4, m: 2 }}
      />

      <Typography variant="" component="p" m={2}>
        I’m a 3rd-year Software Engineering student at Istanbul Nişantaşı university
        focused on .NET backend development. I build clean, maintainable, and
        efficient applications using C#, ASP.NET Core web API, Entity Framework,
        ADO.NET and SQL Server.
        <br />
        <br />
        I’m passionate about solving complex problems, writing high-quality
        code, and continuously improving my programming skills. I have a well
        programming foundation that lets me learn and adapt to new technologies
        quickly. I’m currently looking for an internship or part-time
        opportunitiy to contribute with real-world projects, gain industry
        experience, and grow as a backend developer.
      </Typography>
    </Container>
  );
}
