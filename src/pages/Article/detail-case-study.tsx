/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid } from "@mui/material";
import Container from "../../common/Container";
import HeadTitle from "../../components/Block/headTitle";
import HeadTitleContent from "../../content/CaseStudyContent/HeadTitle.json";
import ReviewBlock from "../../components/Block/reviewBlock";
import ReviewContent from "../../content/CaseStudyContent/ReviewContent.json";
import ResultContent from "../../content/CaseStudyContent/ResultContent.json";
import FlipBlock from "../../components/Block/flipBlock";
import ProblemContent from "../../content/CaseStudyContent/ProblemContent.json";
import TechnologyContent from "../../content/CaseStudyContent/TechnologyContent.json";
import FeedbackContent from "../../content/CaseStudyContent/FeedbackContent.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArticleService } from "../../services/api";
import { DetailArticleProps } from "../../components/Article/types";

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [detailAritcle, setDetailArticle] = useState<DetailArticleProps | null>(null);

  const fetchArticleDetail = async () => {
    try {
      const response = await ArticleService.getArticleById(Number(id));
      const result = await response.json();

      setDetailArticle(result.data);
    } catch (error) {
      console.error("Error fetching article detail:", error);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchArticleDetail();
  }, [id]);

  if (!detailAritcle) {
    return <p>Loading...</p>;
  }

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
          title_en={detailAritcle.title_en}
          title_kh={detailAritcle.title_en}
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
        <FlipBlock
          title={TechnologyContent.title}
          list={TechnologyContent.list}
        />

        {/* client feetback */}
        <FlipBlock
          title={FeedbackContent.title}
          description={FeedbackContent.description}
        />
      </Box>
    </Container>
  );
};

export default CaseStudyDetail;
