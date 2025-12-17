import { lazy, useEffect, useState } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { BlogSectionWrapper } from "./styles";
import { CardProps } from "../../components/CardBlog/types";
import { ArticleService } from "../../services/article";

const CardBlog = lazy(() => import("../../components/CardBlog"));

const BlogSection = () => {
  const [blogs, setBlogs] = useState<CardProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await ArticleService.getBlogArticles();
      const result = await response.json();
      
      setBlogs(result.data);
    } catch (err) {
      setError("fail to fetch data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <BlogSectionWrapper>
      <Typography sx={{ margin: 0 }} variant="h3" fontWeight={700} mb={4}>
        Latest Blog & Tech News
      </Typography>
      <Grid container spacing={2}>
        {blogs.map((blog, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <CardBlog
              title_en={blog.title_en}
              title_kh={blog.title_kh}
                info_en={blog.info_en}
                info_kh={blog.info_kh}
              image={blog.image}
              url={blog.url}
            />
          </Grid>
        ))}
      </Grid>
      <Box height="20px" textAlign="center">
        <Link
          href="/blog"
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
};

export default BlogSection;
