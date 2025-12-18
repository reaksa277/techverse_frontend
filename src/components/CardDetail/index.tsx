import { Icon } from "@iconify/react";
import { IconCircle } from "../../layouts/serviceSection/styles";
import { Link, Typography, Box, Stack } from "@mui/material";
import { primary } from "../../theme/palette";
import { CardDetailProps } from "../../components/CardDetail/types"

const CardDetail = ({
  title_en,
  title_kh,
  info_en,
  info_kh,
  image,
  tag,
  url,
  created_at,
  icon,
  id,
}: CardDetailProps) => {
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
        flexDirection: "row",
        justifyContent: "center",
        "&:hover": {
          border: 1,
          borderColor: "primary.light",
        },
      }}
    >
      <Stack direction="column" spacing={2}>
        {icon && (
          <IconCircle>
            <Icon icon={icon} width="40" height="40" />
          </IconCircle>
        )}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
          <Typography variant="body2">{created_at}</Typography>
        </Box>
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
          {title_en ? title_en : title_kh}
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
          {info_en ? info_en : info_kh}
        </Typography>
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
            Read more
            <Icon width="16" height="16" icon="tabler:arrow-narrow-right" />
          </Link>
        )}
      </Stack>
      {image && (
        <img
          style={{ borderRadius: "8px", width: "265px" }}
          src={image}
          alt={title_en ? title_en : title_kh}
        />
      )}
    </Box>
  );
};

export default CardDetail;
