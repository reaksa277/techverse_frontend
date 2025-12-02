import { Box, Stack, Typography } from "@mui/material";
import Container from "../../common/Container";
import { primary } from "../../theme/palette";
import { DetailArticleProps } from "./types";

const DetailArticle = ({
  title,
  image,
  content,
  profile,
  author,
  date,
  tag,
}: DetailArticleProps) => {
  return (
    <>
      <Container>
        <Box sx={{ width: "595px", margin: "40px auto" }}>
          <Typography variant="h3" sx={{ fontSize: "36px", mb: 2 }}>
            {title}
          </Typography>
          <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <img
                src={profile}
                alt={author}
                style={{ width: "48px", height: "48px", borderRadius: "100px" }}
              />
              <Typography variant="body2">
                {author} . {date}
              </Typography>
            </Stack>
            <Typography
              sx={{
                height: "28px",
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
          </Box>
        </Box>
        <img
          style={{ width: "100%", height: "675px", borderRadius: "16px" }}
          src={image}
          alt={title}
        />
      </Container>
      <Box sx={{ width: "595px", margin: "40px auto" }}>
        <Typography mt={3} variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {content}
        </Typography>
      </Box>
    </>
  );
};

export default DetailArticle;
