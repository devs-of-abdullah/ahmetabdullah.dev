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
  "C#","ASP.NET Core","EF Core","SignalR","SQL Server",
  "RESTful API","CRUD Operations","Authentication & Authorization",
  "Validations","Clean Architecture", "Layered (N-Tier) Architecture"
  ,"Git","GitHub"
 
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
