import styled from "styled-components";

interface HeroSectionProps {
    banner: string;
}

export const HeroSection = styled.section<HeroSectionProps>`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  color: white;
  text-align: start;
  position: relative;

  background-image: url(${props => props.banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Optional overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  color: #1E1F1F;
  z-index: 2;
    left: 21%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: start;
`;
