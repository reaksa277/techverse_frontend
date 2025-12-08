import { Box, Grid, Pagination } from "@mui/material";
import Container from "../../common/Container";
import PageHeader from "../../components/PageHeader";
import CommunBlock from "../../components/customizes/communBlock";
import CommunityContent from "../../content/CommunityContent.json";
import CreatePostBlock from "../../components/customizes/CreatePostBlock";
import CreatePostContent from "../../content/CreatePostContent.json";

const CommunityPage = () => {
  return (
    <>
      <PageHeader
        title="Community Discussions"
        subtitle="Join conversations with IT professionals, ask technical questions, and share knowledge across software development, cloud, AI, cybersecurity, and more."
      />

      <Container>
        <Grid container spacing={2} margin="80px 0">
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            <Grid container spacing={2} sx={{justifyContent: "center"}}>
              {CommunityContent.map((item, index) => {
                return (
                  <Grid size={{ xs: 12, md: 12 }} key={index}>
                    <CommunBlock
                      profile={item.profile}
                      author={item.author}
                      date={item.date}
                      tag={item.tag}
                      question={item.question}
                      description={item.description}
                      image={item.image}
                      numReact={item.numReact}
                      numComment={item.numComment}
                    />
                  </Grid>
                );
              })}
            <Box sx={{ margin: "8px 0" }}>
              <Pagination count={5} color="secondary" />
            </Box>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <CreatePostBlock
              title={CreatePostContent.title}
              description={CreatePostContent.description}
              button={CreatePostContent.button}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CommunityPage;
