import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  StyledRow,
  ButtonWrapper,
  List,
} from "./styles";
import { Grid, Typography } from "@mui/material";

const ContentBlock = ({
  icon,
  title,
  content,
  button,
  list,
  t,
  id,
  direction,
  image,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Grid container spacing={2} alignItems="center">
            {direction === "right" ? (
              <>
                <Grid size={{ xs: 12, md: 6 }}>
                  {icon && <SvgIcon src={icon} width="100%" height="100%" />}
                  {image && (
                    <img
                      src={image}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "331.88px",
                        objectFit: "cover",
                        borderRadius: "16px",
                        display: "block",
                      }}
                    />
                  )}
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ padding: "20px" }}>
                  <ContentWrapper>
                    <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
                      {t(title)}
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                      {content}
                    </Typography>
                    <List>
                      {typeof list === "object" &&
                        list.map((item: string, id: number) => {
                          return <li key={id}>{t(item)}</li>;
                        })}
                    </List>
                    <ButtonWrapper>
                      {typeof button === "object" &&
                        button.map(
                          (
                            item: {
                              color?: string;
                              title: string;
                            },
                            id: number
                          ) => {
                            return (
                              <Button
                                key={id}
                                color={item.color}
                                onClick={() => scrollTo("head")}
                              >
                                {t(item.title)}
                              </Button>
                            );
                          }
                        )}
                    </ButtonWrapper>
                  </ContentWrapper>
                </Grid>
              </>
            ) : (
              <>
                <Grid size={{ xs: 12, md: 6 }} sx={{ padding: "20px" }}>
                  <ContentWrapper>
                    <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
                      {t(title)}
                    </Typography>
                    <Content>{t(content)}</Content>
                    <List>
                      {typeof list === "object" &&
                        list.map((item: string, id: number) => {
                          return <li key={id}>{t(item)}</li>;
                        })}
                    </List>
                    <ButtonWrapper>
                      {typeof button === "object" &&
                        button.map(
                          (
                            item: {
                              color?: string;
                              title: string;
                            },
                            id: number
                          ) => {
                            return (
                              <Button
                                key={id}
                                color={item.color}
                                onClick={() => scrollTo("head")}
                              >
                                {t(item.title)}
                              </Button>
                            );
                          }
                        )}
                    </ButtonWrapper>
                  </ContentWrapper>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  {icon && <SvgIcon src={icon} width="100%" height="100%" />}
                  {image && (
                    <img
                      src={image}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "331.88px",
                        objectFit: "cover",
                        borderRadius: "16px",
                        display: "block",
                      }}
                    />
                  )}
                </Grid>
              </>
            )}
          </Grid>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
