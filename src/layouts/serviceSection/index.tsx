import { Grid, Typography } from "@mui/material";
import { ServicesWrapper } from "./styles";
import { CardProps } from "../../components/Card/types";
import { lazy, useEffect, useState } from "react";
const CardBlog = lazy(() => import("../../components/Card"));

const icons = [
  "solar:code-square-bold-duotone",
  "solar:folder-cloud-bold-duotone",
  "solar:translation-2-line-duotone",
  "solar:shield-check-bold-duotone",
  "solar:users-group-two-rounded-bold-duotone",
];

const ServiceSection = () => {
    const [services, setServices] = useState<CardProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:8000/api/articles/");
            const result: CardProps[] = await response.json();

            setServices(result);
        } catch (err) {
            setError("fail to fetch data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
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
                    image={service.image}
                    type={service.type}
                    icon={icons[index]}
                    url={service.url}
                    linkName="Learn More"
                  />
                </Grid>
              ))}
            </Grid>
    </ServicesWrapper>
  );
}

export default ServiceSection;
