import { Stack, Typography } from "@mui/material";

interface Props {
  title: string;
  description: string;
}

const ReviewBlock = ({ title, description }: Props) => {
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h4">{title}</Typography>
      <Typography mt={3} variant="body1" sx={{ whiteSpace: "pre-line" }}>
        {description}
      </Typography>
    </Stack>
  );
};

export default ReviewBlock;
