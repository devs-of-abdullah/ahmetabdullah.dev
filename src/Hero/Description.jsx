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
        I’m a third-year Software Engineering student focused on full-stack
        development, building well-structured and maintainable applications with
        clean, well-designed software practices. I have a strong programming
        foundation, which allows me to quickly adapt to new tools and
        technologies. I’m currently open for internship or part-time
        opportunities to gain working experience on real-world projects.
      </Typography>
    </Container>
  );
}
