import { CardProps } from "./types";
import { Typography, Box } from "@mui/material";

const Card = ({
    title,
    description,
    image,
}: CardProps) => {
  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "16px",
        padding: "24px",
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </Box>
  );
};
