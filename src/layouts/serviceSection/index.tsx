import { Grid, Typography } from "@mui/material";
import { ServicesWrapper } from "./styles";
import { CardProps } from "../../components/Card/types";
import { lazy } from "react";
const CardBlog = lazy(() => import("../../components/Card"));

const services: CardProps[] = [
  {
    icon: "solar:code-square-bold-duotone",
    title: "Development",
    description:
      "Build high-performing digital products with modern frameworks like React, Next.js, and more.",
    link: "/development",
    linkName: "Learn more",
  },
  {
    icon: "solar:folder-cloud-bold-duotone",
    title: "Cloud Engineering",
    description:
      "Scale your business with secure, cost-efficient cloud migration, DevOps, and infrastructure.",
    link: "/cloud",
    linkName: "Learn more",
  },
  {
    icon: "solar:translation-2-line-duotone",
    title: "Machine Learning",
    description:
      "Leverage intelligent systems to automate processes and enhance decision-making.",
    link: "/machine-learning",
    linkName: "Learn more",
  },
  {
    icon: "solar:wi-fi-router-bold-duotone",
    title: "IT Consulting",
    description:
      "From strategy to implementation — guide organizations to adopt modern technologies.",
    link: "/consulting",
    linkName: "Learn more",
  },
  {
    icon: "solar:shield-check-bold-duotone",
    title: "Cybersecurity",
    description:
      "Protect your systems with advanced monitoring, threat detection, and encryption.",
    link: "/cybersecurity",
    linkName: "Learn more",
  },
  {
    icon: "solar:users-group-two-rounded-bold-duotone",
    title: "Tech Community",
    description:
      "Join our network of IT professionals — share experiences and grow together.",
    link: "/community",
    linkName: "Learn more",
  },
];

export default function ServiceSection() {
  return (
    <ServicesWrapper>
      <Typography variant="h3" fontWeight={700} mb={4}>
        Our Core Services
      </Typography>
      <Grid container spacing={2}>
              {services.map((service, index) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                  <CardBlog
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    tag={service.tag}
                    icon={service.icon}
                    link={service.link}
                    linkName={service.linkName}
                  />
                </Grid>
              ))}
            </Grid>
    </ServicesWrapper>
  );
}
