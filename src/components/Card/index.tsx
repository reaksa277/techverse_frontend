import { IconCircle } from "../../layouts/serviceSection/styles";
import { primary } from "../../theme/palette";
import { CardProps } from "./types";
import { Typography, Box, Link } from "@mui/material";
import { Icon } from "@iconify/react";

const Card = ({ title, description, image, tag, icon, link }: CardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        borderRadius: "16px",
        border: 1,
        borderColor: "grey.0",
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
      {image && <img style={{ borderRadius: "8px" }} src={image} alt={title} />}
      {icon && (
        <IconCircle>
          <Icon icon={icon} width="40" height="40" />
        </IconCircle>
      )}
      {tag && (
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
      )}
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
      {link && (
        <Link
          href={link}
          sx={{
            textTransform: "underline",
            color: "primary.main",
            fontWeight: 600,
            alignItems: "center",
            display: "inline-flex",
            gap: 0.5,
          }}
        >
          Learn more
          <Icon width="16" height="16" icon="tabler:arrow-narrow-right" />
        </Link>
      )}
    </Box>
  );
};

export default Card;
