import styled, { keyframes } from "styled-components";
import { fadeInLeft, fadeInRight } from "react-animations";
const fadeAnimationLeft = keyframes`${fadeInLeft}`;
const fadeAnimationRight = keyframes`${fadeInRight}`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  div + div {
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: start;
    color: #000;
    animation: 2s ${fadeAnimationRight};

    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: cover;
    }
  }
`;

export const ContentArea = styled.div`
  animation: 1s ${fadeAnimationLeft};
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 4rem;
    color: var(--textLight);
  }

  h2 {
    font-size: 3rem;
    color: var(--green);
    margin: 0.8rem 0;
  }

  p {
    font-size: 1.5rem;
    max-width: 80%;
    text-align: justify;
  }
`;

export const ButtonsOrderDetailProduct = styled.div`
  display: flex;

  width: 100%;
  gap: 2rem;
  align-content: space-around;
  margin: 2rem 0;

  button {
    padding: 1rem 0.9rem;
    border: 0;
    color: #fff;
    background-color: var(--green);
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 6px;
    transition: filter 0.2s;
    transition: background 0.2s;
    &:hover {
      filter: brightness(0.9);
    }

    &.quantityButton {
      background-color: var(--textLight);
    }
  }
`;
