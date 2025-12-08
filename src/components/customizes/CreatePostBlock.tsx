import { Button, Stack, Typography } from "@mui/material";
import { IconCircle } from "../../layouts/serviceSection/styles";
import { Icon } from "@iconify/react";

interface Props {
  title: string;
  description?: string;
  button: string;
}

const CreatePostBlock = ({ title, description, button }: Props) => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{ backgroundColor: "common.white", borderRadius: "16px", padding: "16px" }}
    >
      <IconCircle>
        <Icon icon="tabler:playlist-add" width="40" height="40" />
      </IconCircle>
      <Typography
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textAlign: "start",
        }}
        variant="h6"
        gutterBottom
      >
        {title}
      </Typography>
      {description && (
        <Typography
          sx={{
            overflow: "hidden",
            textAlign: "start",
          }}
          variant="body1"
          color="textSecondary"
        >
          {description}
        </Typography>
      )}

      <Button variant="contained" fullWidth sx={{ mt: 2, height: "51px" }}>
        {button} <Icon style={{marginLeft: "8px"}} icon="tabler:circle-plus" width="24" height="24" />
      </Button>
    </Stack>
  );
};

export default CreatePostBlock;
