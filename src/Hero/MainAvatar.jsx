import { Avatar, Box } from "@mui/material";

export default function MainAvatar( ) {
  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        m:2
      }}
    >
      <Avatar
        alt="Ahmet Abdullah"
        
        src="/ahmet-abdullah.jpg"
        sx={{
          width:{xs:300,sm:400,md:500},
          height:{xs:300,sm:400,md:500},
          border: "4px solid",
          borderColor: "var(--text-color)",
          "&:hover": {
            transform: "scale(1.03)",
            transition: "all 0.3s ease",
          },
        }}
      />
    </Box>
  );
}
