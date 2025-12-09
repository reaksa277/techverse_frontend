import { Icon } from "@iconify/react";
import { Stack, Typography } from "@mui/material";

interface Props {
  icon: string;
  number: number;
}

const SocailAction = ({ icon, number }: Props) => {
  return (
    <Stack direction="row" spacing={1}>
      <Icon icon={icon} width="24" height="24" />
      <Typography variant="body1">{number}</Typography>
    </Stack>
  );
};

export default SocailAction;
