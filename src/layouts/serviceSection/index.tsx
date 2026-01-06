import { Grid, Typography } from "@mui/material";
import { ServicesWrapper } from "./styles";
import { lazy } from "react";
import { FetchService } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
const CardBlog = lazy(() => import("../../components/Card/card-service"));

const ServiceSection = () => {
  const {
    data: services,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["services"],
    queryFn: FetchService,
  });

  if (isLoading) return <p>Loading services...</p>;
  if (error) return <p>{(error as Error).message}</p>;

  return (
    <ServicesWrapper>
      <Typography variant="h3" fontWeight={700} mb={4}>
        Our Core Services
      </Typography>
      <Grid container spacing={2}>
        {services?.map((service, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <CardBlog
              title_en={service.title_en}
              title_kh={service.title_kh}
              info_en={service.info_en}
              info_kh={service.info_kh}
              category_image={service.category_image}
              type={service.type}
              url={service.url}
              linkName="Learn More"
            />
          </Grid>
        ))}
      </Grid>
    </ServicesWrapper>
  );
};

export default ServiceSection;
