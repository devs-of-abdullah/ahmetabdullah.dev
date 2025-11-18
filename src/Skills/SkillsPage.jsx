import React from "react";
import { Box, Typography, Chip, Stack,Divider } from "@mui/material";

const Skill = ({ name }) => {
  return (
    <Chip
      label={name}
      variant="outlined"
      sx={{
        color: "var(--text-color)",
      
        fontSize: 14,
        borderRadius: 2,
        padding: 1,
        fontFamily : "var(--fontfamily)"
      }}
    />
  );
};

export default function SkillsPage() {
 

const allSkills = [
  "C++","DS","OOP",
  "C#",  
  ".NET Core",
  "WinForms",
  "Windows Services",
  "RESTful APIs",
  "ADO.NET",
  "Entity Framework Core",
  "T-SQL",
  "PostgreSQL",
  "SignalR",
  "JWT Auth",
  "Clean Code",
  "N-Tier Architecture",
  "SOLID Principles",
  "Render ",
  "Git",
  "Github"
];





  return (
    <Box sx={{ textAlign: "center", mt: 5, mb: 10 }}>
      <Divider
        sx={{ backgroundColor: "var(--background-second)", height: 4, m: 4 }}
      />
     

      <Typography variant="" component="h1" mb={4}>
        Skills
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={1.5}
      >
        {allSkills.map((skill, index) => (
          <Skill key={index} name={skill} />
        ))}
      </Stack>
      <Divider
        sx={{ backgroundColor: "var(--background-second)", height: 4, m: 4 }}
      />
    </Box>
  );
}
