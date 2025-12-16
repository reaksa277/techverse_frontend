import {
  Grid,
  Container,
  MenuItem,
  TextField,
  Button,
  Box,
  Pagination,
  Typography,
  Stack,
} from "@mui/material";
import PageHeader from "../../components/PageHeader";
import SearchInput from "../../common/SearchInput";
import { lazy, useState } from "react";
import { CardProps } from "../../components/Card/types";
import { primary } from "../../theme/palette";

const CardBlog = lazy(() => import("../../components/CardDetail"));

const categories = [
  { value: "", label: "Select category" },
  { value: "technology", label: "Technology" },
  { value: "programming", label: "Programming" },
  { value: "web-development", label: "Web Development" },
  { value: "mobile-development", label: "Mobile Development" },
];

const blogs: CardProps[] = [
  {
    title_en: "AMD Positions Itself as a Platform Power in the AI Era",
    info_en:
      "AMD’s focus on data center AI and open standards signals its ambition to become a core player in the trillion-dollar compute market.",
    category_image: "/img/blog/card1.jpg",
    tag: "Case Study",
    date: "August 20, 2023",
    link: "/detail-article"
  },
  {
    title_en: "Building a High-Performance Payment API for Fintech",
    info_en:
      "We engineered a scalable Spring Boot + PostgreSQL system capable of processing 1M+ transactions per day with zero downtime and enhanced security.",
    category_image: "/img/blog/card2.jpg",
    tag: "Case Study",
    date: "August 20, 2023",
    link: "/detail-article"
  },
  {
    title_en: "Building a High-Performance Payment API for Fintech",
    info_en:
      "We engineered a scalable Spring Boot + PostgreSQL system capable of processing 1M+ transactions per day with zero downtime and enhanced security.",
    category_image: "/img/blog/card3.jpg",
    tag: "AI",
    date: "August 20, 2023",
    link: "/detail-article"
  },
  {
    title_en: "The Fate of Google’s Ad Tech Monopoly Is Now in a Judge’s Hands",
    info_en :
      "A judge queried lawyers about whether a breakup made sense during closing arguments on how to fix the tech giant’s dominance in online advertising.",
    category_image: "/img/blog/card3.jpg",
    tag: "AI",
    date: "August 20, 2023",
    link: "/detail-article"
  },
  {
    title_en: "Building a High-Performance Payment API for Fintech",
    info_en:
      "We engineered a scalable Spring Boot + PostgreSQL system capable of processing 1M+ transactions per day with zero downtime and enhanced security.",
    category_image: "/img/blog/card3.jpg",
    tag: "AI",
    date: "August 20, 2023",
    link: "/detail-article"
  },
];

const Blog = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <PageHeader
        title="Latest Blog & Tech News"
        subtitle=" Insights, tutorials, industry trends, and updates for developers & technology leaders."
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

        <Grid
          container
          spacing={4}
          sx={{ marginTop: "40px", marginBottom: "80px" }}
        >
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            <Grid container spacing={2} sx={{justifyContent: "center"}}>
                {blogs.map((blog, index) => (
                  <Grid size={{ xs: 12, md: 6, lg: 12 }} key={index}>
                    <CardBlog
                      title_en={blog.title_en}
                      info_en={blog.info_en ? blog.info_en : blog.info_kh}
                      category_image={blog.category_image}
                      tag={blog.tag}
                      link={blog.link}
                      date={blog.date}
                    />
                  </Grid>
                ))}
                <Box sx={{margin: "8px 0"}}>
                <Pagination count={5} color="secondary" />
                </Box>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Box>
                <Typography variant="h5" style={{color: primary.dark}}>Popular Article</Typography>
                <Stack spacing={1} sx={{padding: "16px"}}>
                    <img style={{borderRadius: "8px"}} src="/img/blog/card1.jpg" alt="Popular Article" />
                    <Typography variant="h6">AMD Positions Itself as a Platform Power in the AI Era</Typography>
                </Stack>
                <Stack spacing={1} sx={{padding: "16px"}}>
                    <img style={{borderRadius: "8px"}} src="/img/blog/card1.jpg" alt="Popular Article" />
                    <Typography variant="h6">AMD Positions Itself as a Platform Power in the AI Era</Typography>
                </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Blog;
