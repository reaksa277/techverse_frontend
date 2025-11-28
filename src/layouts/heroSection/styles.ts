import styled from "styled-components";

interface HeroSectionProps {
  banner: string;
}

export const HeroSection = styled.section<HeroSectionProps>`
  width: 100%;
  aspect-ratio: 35 / 13;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  color: white;
  text-align: start;
  position: relative;

  background-image: url(${(props) => props.banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Optional overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    aspect-ratio: 21 / 11;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  color: #1e1f1f;
  z-index: 2;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media screen and (min-width: 480px) and (max-width: 768px) {
    max-width: 65%;
  }
`;
