import { useState } from "react";
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
import { Box, Button } from "@mui/material";
import { FormControl, Select } from "@mui/material";
import { MenuItem as MuiMenuItem } from "@mui/material";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [service, setService] = useState("");
  const history = useHistory();

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const handleChange = (e: any) => {
    const selected = e.target.value;
    setService(selected);
    history.push(selected); // route to selected page
  };

  const MenuItem = () => {
    const history = useHistory();

    const goto = (path: string) => {
      history.push(path);
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => goto("/about")}>
          <Span>{t("About Us")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => goto("/community")}>
          <Span>{t("Community")}</Span>
        </CustomNavLinkSmall>
        <NavSelect
          variant="standard"
          disableUnderline
          value=""
          displayEmpty
          renderValue={() => <CustomNavLinkSmall><Span>{t("Service")}</Span></CustomNavLinkSmall>}
          sx={{ minWidth: "auto" }} // remove extra width
        >
          <MuiMenuItem onClick={() => goto("/development")}>
            {t("Development")}
          </MuiMenuItem>
          <MuiMenuItem onClick={() => goto("/cloud-engineer")}>{t("CloudEngineer")}</MuiMenuItem>
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
        <CustomNavLinkSmall onClick={() => goto("/case-studies")}>
          <Span>{t("Case Studies")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => goto("/blog")}>
          <Span>{t("Blog")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => goto("/contact")}>
          <Span>{t("Contact")}</Span>
        </CustomNavLinkSmall>
        <Box sx={{ display: "inline-block", alignItems: "center", ml: 2 }}>
          <Icon icon="tabler:search" width="24" height="24" />
          <CustomNavLinkSmall
            style={{ width: "100px" }}
            onClick={() => goto("/register")}
          >
            <Span>
              <Button color="primary" variant="contained">
                {t("Register")}
              </Button>
            </Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={() => goto("/signup")}>
            <Span>{t("Sign Up")}</Span>
          </CustomNavLinkSmall>
        </Box>
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
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
