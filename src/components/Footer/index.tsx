import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import {
  FooterSection,
  Title,
  LogoContainer,
  Large,
} from "./styles";
import { Grid, Typography } from "@mui/material";
import Logo from "../../assets/logo.png";

const Footer = ({ t }: { t: TFunction }) => {

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
              <Large to="/case-study">{t("Case Studies")}</Large>
            </Grid>
          </Grid>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
