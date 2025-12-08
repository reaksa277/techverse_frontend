import { Stack, Typography } from "@mui/material";

interface Props {
  number: string;
  content: string;
}

const OrderBlock = ({ number, content }: Props) => {
  return (
    <Stack direction="column" spacing={2}>
      <Typography
        sx={{
          textAlign: "start",
          color: "primary.main"
        }}
        variant="h4"
      >
        {number}
      </Typography>
      <Typography
        sx={{
          textAlign: "start",
        }}
        variant="body1"
      >
        {content}
      </Typography>
    </Stack>
  );
};

export default OrderBlock;
