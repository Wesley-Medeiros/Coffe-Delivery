import styled from "styled-components";
import IntroBackground from "../../../assets/Background.png"
import { rgba } from "polished"
import { TitleText } from "../Typograph";

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${IntroBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`