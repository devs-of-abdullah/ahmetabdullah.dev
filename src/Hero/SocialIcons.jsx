import { Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function SocialIcons() {
  const iconStyle = {
    color: "var(--text-color)",
    transition: "transform 0.3s, color 0.3s",
    "&:hover": {
      transform: "scale(1.3)",
      
    },
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <IconButton
        component="a"
        href="https://github.com/devs-of-abdullah"
        target="_blank"
      >
        <GitHubIcon sx={iconStyle} fontSize="large" />
      </IconButton>
      <IconButton
        component="a"
        href="https://linkedin.com/in/aahmet-abdullah"
        target="_blank"
      >
        <LinkedInIcon sx={iconStyle} fontSize="large" />
      </IconButton>
      <IconButton component="a" href="mailto:realahmetabdullah@gmail.com">
        <EmailIcon sx={iconStyle} fontSize="large" />
      </IconButton>
      <IconButton component="a" href="https://t.me/ahmet_abdullah7">
        <TelegramIcon sx={iconStyle} fontSize="large" />
      </IconButton>
    </Stack>
  );
}
