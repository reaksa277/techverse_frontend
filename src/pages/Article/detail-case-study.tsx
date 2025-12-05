import { Grid } from "@mui/material";
import Container from "../../common/Container";
import HeadTitle from "../../components/Block/headTitle";
import HeadTitleContent from "../../content/CaseStudyContent/HeadTitle.json";
import ReviewBlock from "../../components/Block/reviewBlock";
import ReviewContent from "../../content/CaseStudyContent/ReviewContent.json";
import ResultContent from "../../content/CaseStudyContent/ResultContent.json";

const CaseStudyDetail = () => {
  return (
    <Container>
      <HeadTitle
        title={HeadTitleContent.title}
        image={HeadTitleContent.image}
        author={HeadTitleContent.author}
        profile={HeadTitleContent.profile}
        tag={HeadTitleContent.tag}
      />

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
    </Container>
  );
};

export default CaseStudyDetail;
