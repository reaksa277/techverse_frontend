import { Box, Button, Stack, Typography } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Container from "../../common/Container";
import ProfileBlock from "../../components/customizes/ProfileBlock";
import ProfileContent from "../../content/ProfileContent/Profile.json";
import CommunBlock from "../../components/customizes/communBlock";
import MyArticleContent from "../../content/ProfileContent/MyArticleContent.json";

const ProfilePage = () => {
  return (
    <>
      <PageHeader title="My Profile" />
      <Container>
        <Box sx={{ width: "794px", margin: "80px auto", display: "flex", flexDirection: "column", gap: "40px" }}>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              backgroundColor: "common.white",
              padding: "16px",
              borderRadius: "16px",
            }}
          >
            <ProfileBlock
              avatar={ProfileContent.avatar}
              username={ProfileContent.username}
              tag={ProfileContent.tag}
              bio={ProfileContent.bio}
            />
            <Button sx={{ width: "129px", height: "51px" }} variant="outlined">
              Edit Profile
            </Button>
          </Stack>

          <Stack direction="column" spacing={2}>
            <Typography variant="h4">My Article</Typography>
            {MyArticleContent.map((item) => {
              return (
                <>
                  <CommunBlock
                    question={item.question}
                    description={item.description}
                    image={item.image}
                    date={item.date}
                    tag={item.tag}
                    link={item.link}
                  />
                </>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default ProfilePage;
