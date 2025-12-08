import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  ContentWrapper,
  StyledRow,
  ButtonWrapper,
  List,
} from "./styles";
import { Grid, Link, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

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
  link,
  linkName,
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
                    <Typography
                      sx={{
                        fontSize: "36px",
                        fontWeight: "600",
                        marginBottom: "20px",
                      }}
                    >
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
                    <Typography
                      sx={{
                        fontSize: "36px",
                        fontWeight: "600",
                        marginBottom: "20px",
                      }}
                    >
                      {t(title)}
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                      {content}
                    </Typography>
                    <List>
                      {typeof list === "object" &&
                        list.map((item: string, id: number) => {
                          return (
                            <li
                              key={id}
                              style={{
                                listStyle: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                              }}
                            >
                              <Icon
                                icon="tabler:chevron-right"
                                width="24"
                                height="24"
                              />
                              {t(item)}
                            </li>
                          );
                        })}
                    </List>
                    {link && (
                      <Link
                        href={link}
                        sx={{
                          width: "100%",
                          maxWidth: "180px",
                          padding: "16px 0",
                          marginTop: "16px",

                          backgroundColor: "primary.main",
                          color: "primary.contrastText",
                          fontWeight: 600,
                          borderRadius: "16px",

                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",

                          textAlign: "center",
                          cursor: "pointer",

                          transition: "background-color 0.3s ease",
                          "&:hover": {
                            backgroundColor: "primary.dark",
                            color: "primary.contrastText"
                          },
                        }}
                      >
                        {linkName}
                      </Link>
                    )}
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
