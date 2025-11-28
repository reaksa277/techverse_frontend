import { Box, Stack, Typography } from "@mui/material";
import Container from "../../common/Container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Box sx={{ backgroundColor: "secondary.main", width: "100%", padding: "40px 0" }}>
      <Container>
        <Stack spacing={2}>
          <Typography fontWeight={700} variant="h3" color="grey.0">{title}</Typography>
          {subtitle && <Typography variant="body1" color="grey.0">{subtitle}</Typography>}
        </Stack>
      </Container>
    </Box>
  );
}
