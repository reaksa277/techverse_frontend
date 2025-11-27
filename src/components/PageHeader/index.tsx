import { Box, Typography } from "@mui/material";
import Container from "../../common/Container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Box sx={{ backgroundColor: "secondary.main", width: "100%" }}>
      <Container>
        <Typography fontWeight={700} variant="h4">{title}</Typography>
        {subtitle && <Typography variant="body1">{subtitle}</Typography>}
      </Container>
    </Box>
  );
}
