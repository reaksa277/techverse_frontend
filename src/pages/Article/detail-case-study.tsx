import { Box, Grid } from "@mui/material";
import Container from "../../common/Container";
import HeadTitle from "../../components/Block/headTitle";
import HeadTitleContent from "../../content/CaseStudyContent/HeadTitle.json";
import ReviewBlock from "../../components/Block/reviewBlock";
import ReviewContent from "../../content/CaseStudyContent/ReviewContent.json";
import ResultContent from "../../content/CaseStudyContent/ResultContent.json";
import FlipBlock from "../../components/Block/flipBlock";
import ProblemContent from "../../content/CaseStudyContent/ProblemContent.json";

const CaseStudyDetail = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          margin: "80px 0",
        }}
      >
        <HeadTitle
          title={HeadTitleContent.title}
          image={HeadTitleContent.image}
          author={HeadTitleContent.author}
          profile={HeadTitleContent.profile}
          tag={HeadTitleContent.tag}
        />

        {/* Result */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <ReviewBlock
              title={ReviewContent.title}
              description={ReviewContent.description}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Grid container spacing={2}>
              {ResultContent.map((item, index) => {
                return (
                  <Grid size={{ xs: 12, md: 6, lg: 6 }} key={index}>
                    <ReviewBlock
                      title={item.title}
                      description={item.description}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>

        {/* Problem */}
        <FlipBlock title={ProblemContent.title} list={ProblemContent.list} />

        {/* Technology */}

      </Box>
    </Container>
  );
};

export default CaseStudyDetail;
