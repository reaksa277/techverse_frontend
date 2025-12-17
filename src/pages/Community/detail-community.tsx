import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Container from "../../common/Container";
import DetailArticle from "../../components/Article";
import CommnunityDetailContent from "../../content/CommunDetailContent.json";
import SocailAction from "../../components/SocialAction";
import SocailActionContent from "../../content/SocailAction.json";
import Profile from "../../components/Profile";
import CommentContent from "../../content/UserProfile.json";

const DetailCommunity = () => {
  return (
    <>
      <DetailArticle
        title_en={CommnunityDetailContent.title}
        image={CommnunityDetailContent.image}
        profile={CommnunityDetailContent.profile}
        author={CommnunityDetailContent.author}
        date={CommnunityDetailContent.date}
        tag={CommnunityDetailContent.tag}
        description_en={CommnunityDetailContent.content}
      />
      <Container>
        <Box
          sx={{
            width: "595px",
            margin: "40px auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Stack direction="row" spacing={2}>
            {SocailActionContent.map((item) => {
              return <SocailAction icon={item.icon} number={item.number} />;
            })}
          </Stack>
          <Divider />

          {/* Comment Section */}
          {CommentContent.map((item) => {
            return (
              <>
                <Stack direction="column" spacing={2}>
                  <Profile
                    avatar={item.avatar}
                    author={item.author}
                    date={item.date}
                    />
                  <Typography variant="body1">{item.comment}</Typography>
                </Stack>
                <Divider />
              </>
            );
          })}

          <Button variant="outlined">Load more</Button>
        </Box>
      </Container>
    </>
  );
};

export default DetailCommunity;
