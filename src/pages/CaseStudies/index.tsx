import {
  Grid,
  Container,
  MenuItem,
  TextField,
  Button,
  Box,
  Pagination,
} from "@mui/material";
import PageHeader from "../../components/PageHeader";
import SearchInput from "../../common/SearchInput";
import { lazy, useState } from "react";
import { CardProps } from "../../components/Card/types";

const CardBlog = lazy(() => import("../../components/Card"));

const categories = [
  { value: "", label: "Select category" },
  { value: "technology", label: "Technology" },
  { value: "programming", label: "Programming" },
  { value: "web-development", label: "Web Development" },
  { value: "mobile-development", label: "Mobile Development" },
];

const caseStudy: CardProps[] = [
  {
    title_en: "Building a High-Performance Payment API for Fintech",
    info_en:
      "We engineered a scalable Spring Boot + PostgreSQL system capable of processing 1M+ transactions per day with zero downtime and enhanced security.",
    category_image: "/img/casestudy/payment.jpg",
    tag: "Case Study",
    link: "/detail-case-study",
    linkName: "View case study",
  },
  {
    title_en: "Scalable E-Commerce Platform Development",
    info_en:
      "Built a high-performance e-commerce platform using React, Next.js, and Spring Boot. Implemented microservices architecture, integrated secure payment gateways, and achieved 99.9% uptime under high traffic.",
    category_image: "/img/casestudy/case1.png",
    tag: "Case Study",
    link: "/detail-case-study",
    linkName: "View case study",
  },
  {
    title_en: "Real-Time Chat Application",
    info_en:
      "Developed a cross-platform chat application with WebSocket and Firebase for real-time messaging. Features include media sharing, typing indicators, and message encryption.",
    category_image: "/img/casestudy/case2.png",
    tag: "Case Study",
    link: "/detail-case-study",
    linkName: "View case study",
  },
  {
    title_en: "Task & Project Management Tool",
    info_en:
      "Developed a cross-platform chat application with WebSocket and Firebase for real-time messaging. Features include media sharing, typing indicators, and message encryption.",
    category_image: "/img/casestudy/case3.webp",
    tag: "Case Study",
    link: "/detail-case-study",
    linkName: "View case study",
  },
];

const Blog = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <PageHeader
        title="Our Impact in Technology"
        subtitle="Explore real-world solutions we’ve built across industries using modern Web, Mobile, Cloud, AI & Cybersecurity technologies."
      />
      <Container>
        <Box
          sx={{
            padding: "16px",
            backgroundColor: "common.white",
            borderRadius: "16px",
            marginTop: "80px",
          }}
        >
          <Grid container spacing={2} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6, lg: 5 }}>
              <TextField
                id="outlined-select-category"
                select
                label="Category"
                defaultValue="technology"
                sx={{ width: "100%" }}
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 5 }}>
              <SearchInput
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12, lg: 2 }}>
              <Button
                variant="contained"
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "grey.100",
                  color: "black",
                }}
              >
                Filter
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={4} sx={{ margin: "40px 0" }}>
          <Grid size={{ xs: 12, md: 6, lg: 12 }}>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              {caseStudy.map((item, index) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                  <CardBlog
                    title_en={item.title_en}
                    info_en={item.info_en ? item.info_en : item.info_kh}
                    category_image={item.category_image}
                    tag={item.tag}
                    link={item.link}
                    linkName={item.linkName}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{ margin: "80px 0", display: "flex", justifyContent: "center" }}
        >
          <Pagination count={5} color="secondary" />
        </Box>
      </Container>
    </>
  );
};

export default Blog;
