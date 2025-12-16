import { Box, Grid, Stack, Typography } from "@mui/material";
import Container from "../../common/Container";
import ContentBlock from "../../components/ContentBlock";
import PageHeader from "../../components/PageHeader";
import Card from "../../components/Card";

import About from "../../content/AboutContent/About.json";
import WhoWeAre from "../../content/AboutContent/WhoWeAre.json";
import Vision from "../../content/AboutContent/Vision.json";
import Mission from "../../content/AboutContent/Mission.json";
import WhatWeDoContent from "../../content/AboutContent/DoArticle.json";
import ValueContent from "../../content/AboutContent/ValueContent.json";
import OtherContent from "../../content/AboutContent/OtherContent.json";

import { IconCircle } from "../../layouts/serviceSection/styles";
import { Icon } from "@iconify/react";

const AboutPage = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Empowering Businesses Through Technology & Innovation"
      />

      <Container>
        <ContentBlock
          direction="right"
          title={About.title}
          content={About.content}
          image={About.image}
          id="about"
        />

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Box
              sx={{
                backgroundColor: "common.white",
                borderRadius: "16px",
                border: 1,
                borderColor: "grey.0",
                gap: "16px",
                padding: "20px",
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                cursor: "pointer",
                "&:hover": {
                  border: 1,
                  borderColor: "primary.light",
                },
              }}
            >
              <IconCircle>
                <Icon icon={Mission.icon} width="40" height="40" />
              </IconCircle>
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
                {Mission.title}
              </Typography>
              <Typography
                sx={{
                  textAlign: "start",
                }}
                variant="body2"
                color="textSecondary"
              >
                {Mission.description}
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Card
              icon={Vision.icon}
              title_en={Vision.title}
              title_kh={Vision.title}
              info_en={Vision.description}
            />
          </Grid>
        </Grid>
        <ContentBlock
          direction="left"
          title={WhoWeAre.title}
          content={WhoWeAre.content}
          image={WhoWeAre.image}
          id="WhoWeAre"
        />

        <Box sx={{ marginBottom: "60px" }}>
          <Stack direction="column" spacing={2}>
            <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
              What We Do
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
              We deliver high-quality knowledge and skill development content
              through:
            </Typography>
          </Stack>
          <Grid container spacing={2} marginTop={"20px"}>
            {WhatWeDoContent.map((item, index) => {
              return (
                <Grid key={index} size={{ xs: 12, md: 6, lg: 6 }}>
                  <Card icon={item.icon} title_en={item.title} list={item.list} />
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Stack direction="column" spacing={2} sx={{ marginBottom: "60px" }}>
          <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
            Our Values
          </Typography>

          <Grid container spacing={2}>
            {ValueContent.map((item, index) => {
              return (
                <Grid key={index} size={{ xs: 6, md: 6, lg: 3 }}>
                  <Stack direction="column" spacing={2}>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="body1">{item.description}</Typography>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Stack>

        <Grid container spacing={2} marginBottom={"100px"}>
          {OtherContent.map((item, index) => {
            return (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                <Card title_en={item.title} list={item.list} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default AboutPage;
