import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Large,
  FooterContainer,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";
import { Grid, Typography } from "@mui/material";
import Logo from "../../assets/logo.png";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <LogoContainer>
                <img src={Logo} alt="Logo" style={{ width: "256px", height: "79px" }} />
                <Typography variant="body1">
                  “Innovating digital solutions for businesses.”
                </Typography>
              </LogoContainer>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 2 }}>
              <Title>{t("Quick Links")}</Title>
              <Large to="/">{t("Home")}</Large>
              <Large to="/">{t("About")}</Large>
              <Large to="/">{t("Services")}</Large>
              <Large to="/">{t("Community")}</Large>
              <Large to="/">{t("Contact")}</Large>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 2 }}>
              <Title>{t("Resources")}</Title>
              <Large to="/">{t("Blogs & News")}</Large>
              <Large to="/">{t("Case Studies")}</Large>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 2 }}>
                <Title>{t("Language")}</Title>
              {/* <Label htmlFor="select-lang">{t("Language")}</Label> */}
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Grid>
          </Grid>
        </Container>
      </FooterSection>
      {/* <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@lashakakabadze/"
                src="medium.svg"
              />
              <a
                href="https://ko-fi.com/Y8Y7H8BNJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  height="36"
                  style={{ border: 0, height: 36 }}
                  src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a>
            </FooterContainer>
          </Row>
        </Container>
      </Extra> */}
    </>
  );
};

export default withTranslation()(Footer);
