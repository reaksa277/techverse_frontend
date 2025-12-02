import { HeroSection, HeroContent } from "./styles";
import { withTranslation, TFunction } from "react-i18next";
import Banner from "../../assets/banner.jpg";
import { Button } from "../../common/Button";
import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));

interface HeroProps {
  title: string;
  subtitle: string;
  button: string;
  id: string;
  t: TFunction;
}

const Hero = ({ title, subtitle, button, t }: HeroProps) => {
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
          <h1 style={{ color: "grey{900}" }}>{t(title)}</h1>
          <p style={{ color: "grey{500}" }}>{t(subtitle)}</p>
          <Button onClick={() => scrollTo("head")}>{t(button)}</Button>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default withTranslation()(Hero);
