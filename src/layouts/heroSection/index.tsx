import { HeroSection, HeroContent } from './styles';
import { withTranslation, TFunction } from "react-i18next";
import Banner from '../../assets/banner.jpg';
import { Button } from "../../common/Button";

interface HeroProps {
    title: string;
    subtitle: string;
    button: string;
    t: TFunction;
}

const Hero = ({ title, subtitle, button, t }: HeroProps) => {
  return (
    <HeroSection banner={Banner}>
        <HeroContent>
            <h1 style={{ color: "grey{900}" }}>{t(title)}</h1>
            <p style={{ color: "grey{500}" }}>{t(subtitle)}</p>
            <Button color='primary.main'>{t(button)}</Button>
        </HeroContent>
    </HeroSection>
  );
}

export default withTranslation()(Hero);
