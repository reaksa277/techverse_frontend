import { Box, Link, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

interface CommunProps {
  profile: string;
  author: string;
  date?: string;
  tag?: string;
  question: string;
  description?: string;
  image?: string;
  numReact?: string;
  numComment?: string;
  link: string;
}

const CommunBlock = ({
  profile,
  author,
  date,
  tag,
  question,
  description,
  image,
  numReact,
  numComment,
  link,
}: CommunProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        borderBottom: "1px solid",
        borderColor: "grey.300",
        paddingBottom: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <img
          src={profile}
          alt={author}
          style={{ width: "48px", height: "48px", borderRadius: "100px" }}
        />
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Typography variant="body1">{author}</Typography>
          <Icon icon="tabler:circle-dot-filled" width="4" height="4" />
          <Typography variant="body1">{date}</Typography>
        </Stack>
        <Typography
          sx={{
            height: "28px",
            padding: "4px 8px",
            backgroundColor: "primary.lighter",
            color: "primary.main",
            width: "fit-content",
            borderRadius: "16px",
            marginTop: "4px",
          }}
          variant="body2"
        >
          {tag}
        </Typography>
      </Box>

      <Link
        href={link}
        underline="none"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack direction="column" spacing={1}>
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
            {question}
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
        </Stack>
        {image && (
          <img
            style={{ borderRadius: "8px", width: "265px" }}
            src={image}
            alt={question}
          />
        )}
      </Link>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Stack direction="row" spacing={1}>
          <Icon icon="tabler:heart" width="24" height="24" />
          <Typography variant="body1">{numReact}</Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Icon icon="tabler:bubble" width="24" height="24" />

          <Link href={link} underline="none" color="common.black">
            <Typography variant="body1">{numComment}</Typography>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default CommunBlock;
