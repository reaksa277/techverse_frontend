import { Button, Typography } from "@mui/material";
import { ConmmunWrapper } from "./styles";
import { useEffect, useState } from "react";
import { SlideService } from "../../services/slide";
import { Link } from "react-router-dom";

interface CommunProps {
    title_en: string;
    title_kh?: string;
    description_en: string;
    description_kh: string;
    url: string;
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

export default function CommunSection() {
    const [advertisement, setAdvertisement] = useState<CommunProps | null>(null);

    const fetchData = async () => {
        const response = await SlideService.getAdvertisement();
        const result = await response.json();

        console.log("result adver", result.data);


        setAdvertisement(result.data[0]);
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <ConmmunWrapper>
      <Typography sx={{margin: 0}} variant="h3" fontWeight={700} mb={4}>
        {advertisement?.title_en ? advertisement.title_en : advertisement?.title_kh}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {advertisement?.description_en ? advertisement.description_en : advertisement?.description_kh}
      </Typography>
      { advertisement?.url && <Button component={Link} to={advertisement.url}>Explore Community</Button>}
    </ConmmunWrapper>
  );
}
