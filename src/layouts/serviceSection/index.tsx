import { Grid, Card, Typography, Link } from "@mui/material";
import { ServicesWrapper, IconCircle } from "./styles";
import { Icon } from "@iconify/react";

interface ServiceSectionProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const services: ServiceSectionProps[] = [
  {
    icon: "solar:code-square-bold-duotone",
    title: "Development",
    description:
      "Build high-performing digital products with modern frameworks like React, Next.js, and more.",
    link: "/development",
  },
  {
    icon: "solar:folder-cloud-bold-duotone",
    title: "Cloud Engineering",
    description:
      "Scale your business with secure, cost-efficient cloud migration, DevOps, and infrastructure.",
    link: "/cloud",
  },
  {
    icon: "solar:translation-2-line-duotone",
    title: "Machine Learning",
    description:
      "Leverage intelligent systems to automate processes and enhance decision-making.",
    link: "/machine-learning",
  },
  {
    icon: "solar:wi-fi-router-bold-duotone",
    title: "IT Consulting",
    description:
      "From strategy to implementation — guide organizations to adopt modern technologies.",
    link: "/consulting",
  },
  {
    icon: "solar:shield-check-bold-duotone",
    title: "Cybersecurity",
    description:
      "Protect your systems with advanced monitoring, threat detection, and encryption.",
    link: "/cybersecurity",
  },
  {
    icon: "solar:users-group-two-rounded-bold-duotone",
    title: "Tech Community",
    description:
      "Join our network of IT professionals — share experiences and grow together.",
    link: "/community",
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
            <Card
              sx={{
                padding: 3,
                height: "100%",
                "&:hover": {
                  border: 1,
                  borderColor: "primary.light",
                },
              }}
            >
              <IconCircle>
                <Icon icon={service.icon} width="40" height="40" />
              </IconCircle>
              <Typography
                variant="h5"
                fontWeight={600}
                color="grey.900"
                mt={2}
                mb={1}
              >
                {service.title}
              </Typography>
              <Typography variant="body2" color="secondary.main" mb={2}>
                {service.description}
              </Typography>
              <Link
                href={service.link}
                sx={{
                  textTransform: "underline",
                  color: "primary.main",
                  fontWeight: 600,
                  alignItems: "center",
                  display: "inline-flex",
                  gap: 0.5,
                }}
              >
                Learn more
                <Icon width="16" height="16" icon="tabler:arrow-narrow-right" />
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ServicesWrapper>
  );
}
