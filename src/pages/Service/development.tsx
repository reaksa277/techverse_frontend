import { Box, Grid, Stack, Typography } from "@mui/material";
import Container from "../../common/Container";
import ContentBlock from "../../components/ContentBlock";
import PageHeader from "../../components/PageHeader";
import Overview from "../../content/ServiceContent/OverviewConten.json";
import Card from "../../components/Card/card-service";
import ProblemContent from "../../content/ServiceContent/ProblemContent.json";
import ProcessContent from "../../content/ServiceContent/ProcessContent.json";
import OrderBlock from "../../components/Block/OrderBlock";
import TechnoContent from "../../content/ServiceContent/TechnoContent.json";
import ReasonWhyContent from "../../content/ServiceContent/ReasonWhyContent.json";

const DevelopmentPage = () => {
  return (
    <>
      <PageHeader
        title="Development"
        subtitle="Build fast, scalable, and beautifully designed applications for web and mobile using modern technologies."
      />

      <Container>
        <ContentBlock
          direction="right"
          title_en={Overview.title}
          title_kh={Overview.title}
          info_en={Overview.content}
          info_kh={Overview.content}
          image={Overview.image}
          id="about"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            marginBottom: "80px",
          }}
        >
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <Card
                title_en={ProblemContent.title}
                list={ProblemContent.list}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <Card
                title_en={ProblemContent.title}
                list={ProblemContent.list}
              />
            </Grid>
          </Grid>

          <Stack direction="column" spacing={2}>
            <Typography
              sx={{
                textAlign: "start",
                fontSize: "28px",
                fontWeight: "600",
              }}
            >
              Our Process
            </Typography>
            <Grid container spacing={2}>
              {ProcessContent.map((item, index) => {
                return (
                  <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                    <OrderBlock number={item.number} content={item.content} />
                  </Grid>
                );
              })}
            </Grid>
          </Stack>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <Card title_en={TechnoContent.title} list={TechnoContent.list} />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <Card
                title_en={ReasonWhyContent.title}
                list={ReasonWhyContent.list}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default DevelopmentPage;
