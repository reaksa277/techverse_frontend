import { lazy } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { BlogSectionWrapper } from "./styles";
import { CardProps } from "../../components/Card/types";

const blogs: CardProps[] = [
  {
    title: "AMD Positions Itself as a Platform Power in the AI Era",
    description:
      "AMD’s focus on data center AI and open standards signals its ambition to become a core player in the trillion-dollar compute market.",
    image: "/img/blog/card1.jpg",
    tag: "Case Study",
    date: "August 20, 2023",
  },
  {
    title: "Building a High-Performance Payment API for Fintech",
    description:
      "We engineered a scalable Spring Boot + PostgreSQL system capable of processing 1M+ transactions per day with zero downtime and enhanced security.",
    image: "/img/blog/card2.jpg",
    tag: "Case Study",
    date: "August 20, 2023",
  },
  {
    title: "Building a High-Performance Payment API for Fintech",
    description:
      "We engineered a scalable Spring Boot + PostgreSQL system capable of processing 1M+ transactions per day with zero downtime and enhanced security.",
    image: "/img/blog/card3.jpg",
    tag: "AI",
    date: "August 20, 2023",
  },
];

const CardBlog = lazy(() => import("../../components/Card"));

export default function BlogSection() {
  return (
    <BlogSectionWrapper>
      <Typography sx={{margin: 0}} variant="h3" fontWeight={700} mb={4}>
        Latest Blog & Tech News
      </Typography>
      {/* Blog posts would go here */}
      <Grid container spacing={2}>
        {blogs.map((blog, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <CardBlog
              title={blog.title}
              description={blog.description}
              image={blog.image}
              tag={blog.tag}
            />
          </Grid>
        ))}
      </Grid>
      <Box height="20px" textAlign="center">
        <Link
          href="#"
          sx={{
            textTransform: "underline",
            color: "primary.main",
            fontWeight: 600,
            alignItems: "center",
            display: "inline-flex",
            gap: 0.5,
          }}
        >
          See more
          <Icon width="16" height="16" icon="tabler:arrow-narrow-right" />
        </Link>
      </Box>
    </BlogSectionWrapper>
  );
}
