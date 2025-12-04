import { lazy, useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import Logo from "../../assets/logo.png";
import { Icon } from "@iconify/react";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  NavSelect,
} from "./styles";
import { useHistory } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { MenuItem as MuiMenuItem } from "@mui/material";

const LoginModal = lazy(() => import("../Modal/LoginModal"));
const SignupModal = lazy(() => import("../Modal/SignupModal"));

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const AuthMenu = () => {

    return (
      <>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
          <CustomNavLinkSmall to="/search">
            <Icon icon="tabler:search" width="24" height="24" />
          </CustomNavLinkSmall>
          <Button
            fullWidth
            color="primary"
            onClick={() => setOpenSignup(true)}
            variant="contained"
          >
            {t("Register")}
          </Button>
          <Button variant="text" onClick={() => setOpenLogin(true)}>
            {t("Sign In")}
          </Button>
        </Stack>
      </>
    );
  };

  const MenuItem = () => {
    const history = useHistory();

    const goto = (path: string) => {
      history.push(path);
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall to="/about-us">
          <Span>{t("About Us")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall to="/community">
          <Span>{t("Community")}</Span>
        </CustomNavLinkSmall>
        <NavSelect
          variant="standard"
          disableUnderline
          value=""
          displayEmpty
          renderValue={() => (
              <Span>{t("Service")}</Span>
          )}
          sx={{ minWidth: "auto" }} // remove extra width
        >
          <MuiMenuItem onClick={() => goto("/development")}>
            {t("Development")}
          </MuiMenuItem>
          <MuiMenuItem onClick={() => goto("/cloud-engineer")}>
            {t("CloudEngineer")}
          </MuiMenuItem>
          <MuiMenuItem onClick={() => goto("/machine-learning")}>
            {t("Maching Learning")}
          </MuiMenuItem>
          <MuiMenuItem onClick={() => goto("/it-consulting")}>
            {t("IT Consulting")}
          </MuiMenuItem>
          <MuiMenuItem onClick={() => goto("/cybersecurity")}>
            {t("Cybersecurity")}
          </MuiMenuItem>
        </NavSelect>
        <CustomNavLinkSmall to="/case-study">
          <Span>{t("Case Studies")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall to="/blog">
          <Span>{t("Blog")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall to="/contact">
          <Span>{t("Contact")}</Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <img src={Logo} alt="Logo" style={{ height: "40px" }} />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
            <AuthMenu />
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
          <AuthMenu />
        </Drawer>
      </Container>

      {/* Modal */}
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
      <SignupModal open={openSignup} onClose={() => setOpenSignup(false)} />
    </HeaderSection>
  );
};

export default withTranslation()(Header);
