import { IconCircle } from "../../layouts/serviceSection/styles";
import { primary } from "../../theme/palette";
import { CardProps } from "./types";
import { Typography, Box, Link } from "@mui/material";
import { Icon } from "@iconify/react";
import { List } from "./styles";

const Card = ({
  title_en,
  title_kh,
  info_en,
  info_kh,
  image,
  tag,
  icon,
  list,
  linkName,
  url,
}: CardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        borderRadius: "16px",
        border: 1,
        borderColor: "grey.0",
        gap: "20px",
        padding: "16px",
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        "&:hover": {
          border: 1,
          borderColor: "primary.light",
        },
      }}
    >
      {image && <img style={{ borderRadius: "8px", height: "210px" }} src={image} alt={title_en ? title_en : title_kh} />}
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
        variant="h5"
        gutterBottom
      >
        {title_en ? title_en : title_kh}
      </Typography>
      {(info_en || info_kh) && (
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textAlign: "start",
          }}
          variant="body1"
          color="textSecondary"
        >
          {info_en ? info_en : info_kh}
        </Typography>
      )}
      {list && (
        <List>
          {typeof list === "object" &&
            list.map((item: string, id: number) => {
              return (
                <li
                  key={id}
                  style={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "flex-start",
                    textAlign: "start",
                    gap: "8px",
                  }}
                >
                  <Box>
                    <Icon
                      icon="tabler:chevron-right"
                      width="24px"
                      height="24px"
                    />
                  </Box>
                  <Typography variant="body1" sx={{ display: "inline-block" }}>
                    {item}
                  </Typography>
                </li>
              );
            })}
        </List>
      )}
      {url && (
        <Link
          href={url}
          sx={{
            textTransform: "underline",
            color: "primary.main",
            fontWeight: 600,
            alignItems: "center",
            display: "inline-flex",
            gap: 0.5,
          }}
        >
          {linkName}
          <Icon width="16" height="16" icon="tabler:arrow-narrow-right" />
        </Link>
      )}
    </Box>
  );
};

export default Card;
