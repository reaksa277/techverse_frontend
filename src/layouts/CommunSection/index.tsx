import { Typography } from "@mui/material";
import { ConmmunWrapper } from "./styles";
import { Button } from "../../common/Button";
import { TFunction } from "react-i18next";

interface CommunProps {
    title: string;
    subtitle: string;
    button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
}

export default function CommunSection({ title, subtitle, button }: CommunProps) {
  return (
    <ConmmunWrapper>
      <Typography sx={{margin: 0}} variant="h3" fontWeight={700} mb={4}>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {subtitle}
      </Typography>
      <Button>{button?.[0].title || ""}</Button>
    </ConmmunWrapper>
  );
}
