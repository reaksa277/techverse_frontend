import { HeroSection, HeroContent } from "./styles";
import Banner from "../../assets/banner.jpg";
import { Button } from "../../common/Button";
import { lazy, useEffect, useState } from "react";
import { SlideService } from "../../services/slide";

const Container = lazy(() => import("../../common/Container"));

interface HeroProps {
  title_en: string;
  title_kh: string;
  description_en: string;
  description_kh: string;
  image?: string;
  url: string;
}

const Hero = ({ title_en, title_kh, description_en, description_kh, url }: HeroProps) => {
  const [data, setData] = useState<HeroProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await SlideService.getSlide();
      const result = await response.json();

      setData(result.data[0]);
    } catch (err) {
      setError("fail to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <HeroSection id="head" banner={Banner}>
      <Container>
        <HeroContent>
          <h1 style={{ color: "grey{900}" }}>
            {data?.title_en ? data?.title_en : data?.title_kh}
          </h1>
          <p style={{ color: "grey{500}" }}>
            {data?.description_en ? data?.description_en : data?.description_kh}
          </p>
          <Button onClick={() => scrollTo("head")}>{data?.url}</Button>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
