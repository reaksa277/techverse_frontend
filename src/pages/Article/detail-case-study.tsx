import { Box, Grid, Stack, Typography } from "@mui/material";

const CaseStudyDetail = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography variant="h3">
              Building a High-Performance Payment API for Fintech
            </Typography>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <img
                src="{profile}"
                alt="{author}"
                style={{ width: "48px", height: "48px", borderRadius: "100px" }}
              />
              <Typography variant="body2">
                Admin
                author
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}></Grid>
      </Grid>
    </>
  );
};

export default CaseStudyDetail;
