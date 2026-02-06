import SocialIcons from "./SocialIcons"
import MainAvatar from "./MainAvatar"
import Description from "./Description"
import { Box } from "@mui/material";

import DownloadCVButton from "./DownloadCVButton"
export default function MainHero(){
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" }, 
          
          mt: 6,
        }}
      >
        <Box>
          <MainAvatar />
        </Box>
        <Box>
          <Description />
          <SocialIcons />
          <DownloadCVButton />
        </Box>
      </Box>
    );
}