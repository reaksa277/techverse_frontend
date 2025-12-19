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
import { lazy, useEffect, useState } from "react";
import { CardProps } from "../../components/Card/types";
import { CaseStudiesService } from "../../services/case-studies";

const CardBlog = lazy(() => import("../../components/Card/card-blog"));

const categories = [
  { value: "", label: "Select category" },
  { value: "technology", label: "Technology" },
  { value: "programming", label: "Programming" },
  { value: "web-development", label: "Web Development" },
  { value: "mobile-development", label: "Mobile Development" },
];

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CardProps[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchCaseStudies = async () => {
    try {

        const response = await CaseStudiesService.getCaseStudies();
        const result = await response.json();

        console.log("case studies:", result.data);


        setCaseStudies(result.data);
    } catch (err) {
        console.error('fail to fetch case studies');
    }
  }

  useEffect(() => {
    fetchCaseStudies();
  }, []);

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
              {caseStudies.map((item, index) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                  <CardBlog
                    title_en={item.title_en}
                    title_kh={item.title_kh}
                    info_en={item.info_en ? item.info_en : item.info_kh}
                    image={item.image}
                    tag={item.tag}
                    url={item.url}
                    linkName="View case study"
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

export default CaseStudies;
