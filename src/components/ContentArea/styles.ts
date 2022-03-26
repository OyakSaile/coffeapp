import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const animationFade = keyframes`${fadeIn}`;

export const Container = styled.main`
  max-width: 1120px;
  margin: 0rem auto;
  padding: 2.5rem 1rem;
  height: 100%;
  animation: 2s ${animationFade};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 5rem;
  align-items: center;
`;
