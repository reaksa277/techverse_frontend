import { primary } from "../../theme/palette";
import { CardProps } from "./types";
import { Typography, Box } from "@mui/material";

const Card = ({ title, description, image, tag }: CardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        borderRadius: "16px",
        gap: "20px",
        padding: "20px",
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        cursor: "pointer",
        "&:hover": {
          border: 1,
          borderColor: "primary.light",
        },
      }}
    >
      <img style={{ borderRadius: "8px" }} src={image} alt={title} />
      <Typography
        sx={{
            padding: "4px 8px",
            backgroundColor: primary.lighter,
            color: primary.main,
            width: "fit-content",
            borderRadius: "16px",
        }}
        variant="body2"
      >
        {tag}
      </Typography>
      <Typography
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textAlign: "start",
        }}
        variant="h6"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textAlign: "start",
        }}
        variant="body2"
        color="textSecondary"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Card;
