import { Box, Grid, Typography } from "@mui/material";
import { List } from "../Card/styles";
import { Icon } from "@iconify/react";

interface Props {
  title: string;
  description?: string;
  list?: string[];
}

const FlipBlock = ({ title, description, list }: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6, lg: 6 }}>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 6 }}>
        {description && (
          <Typography mt={3} variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {description}
          </Typography>
        )}
        {list && (
          <List>
            {typeof list === "object" &&
              list.map((item: string, id: number) => {
                return (
                  <li
                    key={id}
                    style={{
                      listStyle: "none",
                      display: "flex",
                      alignItems: "flex-start",
                      textAlign: "start",
                      gap: "8px",
                    }}
                  >
                    <Box>
                      <Icon
                        icon="tabler:chevron-right"
                        width="24px"
                        height="24px"
                      />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ display: "inline-block" }}
                    >
                      {item}
                    </Typography>
                  </li>
                );
              })}
          </List>
        )}
      </Grid>
    </Grid>
  );
};

export default FlipBlock;
