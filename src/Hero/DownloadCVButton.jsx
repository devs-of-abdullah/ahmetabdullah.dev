import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/CloudDownload";
export default function DownloadCVButton() {
  return (
    
      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        component="a"
        href="/public/AhmetAbdullahCV.pdf"
        download="Ahmet_Abdullah_CV.pdf"
        sx={{
          display:"flex",
          justifySelf:"center",
          background: "var(--background-second)",
          color: "var(--text-color)",
          m:5,
          borderRadius: 10,
          "&:hover": {
            transform: "scale(1.05)",
            transition: "all 0.3s ease",
          },
        }}
      >
        Download CV
      </Button>
  
  );
}
