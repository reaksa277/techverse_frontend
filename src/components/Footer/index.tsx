import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  LogoContainer,
  Large,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";
import { Grid, Typography } from "@mui/material";
import Logo from "../../assets/logo.png";

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
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
              <Large to="/about-us">{t("About")}</Large>
              <Large to="/services">{t("Services")}</Large>
              <Large to="/community">{t("Community")}</Large>
              <Large to="/contact">{t("Contact")}</Large>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 2 }}>
              <Title>{t("Resources")}</Title>
              <Large to="/blog">{t("Blogs & News")}</Large>
              <Large to="/case-studies">{t("Case Studies")}</Large>
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
    </>
  );
};

export default withTranslation()(Footer);
