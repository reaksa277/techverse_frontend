import { Grid, Stack, Typography } from "@mui/material";

interface Props {
  title: string;
  profile?: string;
  date?: string;
  image: string;
  author: string;
  tag: string;
}

const HeadTitle = ({ title, profile, date, image, author, tag }: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6, lg: 6 }}>
        <Stack direction="column" sx={{justifyContent: "space-between", height: "378px"}}
        >
          <Typography variant="h3">{title}</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            {profile && (
              <img
                src={profile}
                alt={title}
                style={{ width: "48px", height: "48px", borderRadius: "100px" }}
              />
            )}
            <Typography variant="body2">
              {author} . {date}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 6 }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "378px", borderRadius: "8px" }}
        />
      </Grid>
    </Grid>
  );
};

export default HeadTitle;
